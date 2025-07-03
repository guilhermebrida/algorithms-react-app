import { Translate } from "@mui/icons-material";
import { Box, Container, Card, Typography, TextField,Button, Grid, Snackbar, Alert} from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactPage(){
    // const backgroundImage = 'https://demos.creative-tim.com/material-kit-react/static/media/illustration-reset.c5f36c0c.jpg'
    // const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg?3'
    const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/23.jpg?3'
    // const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/14.jpg?3'
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(true); 
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const lastSent = localStorage.getItem("lastEmailSent");
        const now = new Date().getTime();

        if (lastSent && now - parseInt(lastSent) < 12 * 60 * 60 * 1000) {
          const remainingTime = 12 * 60 * 60 * 1000 - (now - parseInt(lastSent));
          const hours = Math.floor(remainingTime / (60 * 60 * 1000));
          const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));

          setSuccess(false);
          setMessage(`Aguarde ${hours}h ${minutes}min antes de enviar novamente.`);
          setOpen(true);
          return;
        }

        emailjs
        .sendForm(
            "service_7yyr2uk",
            "template_9v1ishi",
            form.current,
            "G-ME9d7NwgP1cblpv"
        )
        .then(
        () => {
          localStorage.setItem("lastEmailSent",now.toString());
          setSuccess(true);
          setMessage("Mensagem enviada com sucesso!");
          setOpen(true);
          form.current.reset();
        },
        () => {
          setSuccess(false);
          setMessage("Erro ao enviar mensagem. Tente novamente.");
          setOpen(true);
        }
      );
  };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
        <Box
        sx={{
            display:"flex",
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: "100vh",
            // backgroundColor:"blue",
            backgroundSize: "cover",
            backgroundPosition: "center",
            justifyItems: "center",
            justifyContent: "end"
        }} >
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={success ? "success" : "error"} variant="filled" sx={{ fontSize: "0.875rem" }}>
          {message}
        </Alert>
      </Snackbar>
        <Container 
        sx={{
            flex: 0.5,
            minHeight: '100vh', 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',         
            backgroundPosition: 'center',    
            backgroundRepeat: 'no-repeat',   
            display: { xs: 'none', md: 'block' } 
        }}
        />
        
            <Container 
            sx={{
                flex:0.5,
                backgroundColor:"#71abb9",
                margin:0,
                justifyItems:"center"
            }}
            >
                <Card sx={{
                    // backgroundColor: 'theme.background.default',
                    width:"600px", height:"500px", marginTop:"30%", borderRadius:"12px",boxShadow:10}}> 
                    <Card
                    sx={{
                        backgroundColor:"#162635", 
                        width:"550px", 
                        height:"70px", 
                        borderRadius:"12px", 
                        marginTop:"-30px", 
                        position:"absolute", 
                        marginLeft:"25px",
                        boxShadow: "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}>
                        <Typography variant="h4" component="h4" color={"#ffffff"} sx={{fontWeight:"bold"}}>
                            Contact Me 
                        </Typography>
                    </Card>
                    <Typography item xs={12} variant="body2" marginTop={8} sx={{fontWeight:"bold"}}>
                        Reach out anytime. For inquiries, opportunities, or support, contact me at guilherme-brida@hotmail.com or via the form.
                    </Typography>
                <form ref={form} onSubmit={sendEmail}>
                <Box pt={0.5} pb={3} px={3} >
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          variant="standard"
                          label="Full Name"
                          name="name"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="standard"
                          label="Best email"
                          name="email"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="standard"
                          label="I'm looking for"
                          name="subject"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="standard"
                          label="Your message"
                          name="message"
                          fullWidth
                          multiline
                          rows={4}
                          required
                        />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
                        <Grid item > 
                            <Button type="submit" variant="contained" color="primary" sx={{bgcolor:"#162635"}}>
                            Send Message
                            </Button>
                        </Grid>
                    </Grid>
                    </Box>
                    </form>
                </Card>
            </Container>
        </Box>
    </>
    )

}
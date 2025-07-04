import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Alert,
  Snackbar
} from "@mui/material";
import emailjs from "emailjs-com";
import { useRef } from "react";
import bgImage from "../../assets/images/un-illustrazione-di-un-desktop-con-un-portatile-aperto_94064-15751.avif";
import { useState } from "react";

function Contact() {
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

    <Box component="section" sx={{ py: { xs: 0, lg: 6 } }}>
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
      <Container>
        <Grid container>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: 4,
              mb: 6,
              overflow: "hidden",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                sx={{
                  position: "relative",
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(61, 47, 47, 0.6)), url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <Typography variant="h4" mb={1}>
                      Contact Information
                    </Typography>

                    <Box display="flex" alignItems="center" mb={1}>
                      <Typography variant="body2">📞</Typography>
                      <Typography sx={{ ml: 2, opacity: 0.8 }}>
                        (+55) 51 99516-3495
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={1}>
                      <Typography variant="body2">📧</Typography>
                      <Typography sx={{ ml: 2, opacity: 0.8 }}>
                        guilherme-brida@hotmail.com
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={3}>
                      <Typography variant="body2">📍</Typography>
                      <Typography sx={{ ml: 2, opacity: 0.8 }}>
                        Novo Hamburgo, Brazil
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} ref={form} onSubmit={sendEmail}>
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h4" mb={1}>
                      Reach me out!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                      Fill up the form and I will get back to you within 24 hours.
                    </Typography>
                  </Box>

                  <Box pt={0.5} pb={3} px={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          variant="standard"
                          label="Full Name"
                          name="name"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
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
                          rows={6}
                          required
                        />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
                      <Button type="submit" variant="contained" color="primary">
                        Send Message
                      </Button>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;

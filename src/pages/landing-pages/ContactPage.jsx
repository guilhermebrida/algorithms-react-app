import { Translate } from "@mui/icons-material";
import { Box, Container, Card, Typography, TextField,Button, Grid} from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "../../assets/theme";

export default function ContactPage(){
    // const backgroundImage = 'https://demos.creative-tim.com/material-kit-react/static/media/illustration-reset.c5f36c0c.jpg'
    // const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg?3'
    const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/23.jpg?3'
    // const backgroundImage = 'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/14.jpg?3'


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
                        For further questions, including partnership opportunities, please email guilherme-brida@hotmail.com or contact using our contact form. 
                    </Typography>
                <Box pt={0.5} pb={3} px={3}>
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
                </Card>
            </Container>
        </Box>
    </>
    )

}
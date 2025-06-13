import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

import foto from '../../assets/images/foto-linkedin.jpeg'
// import wallpaper from '../../assets/images/close-up-laptop-keyboard-colorful-neon-illumination-backlit-keyboard.jpg'
import wallpaper from '../../assets/images/wallpaper.png'
function Author() {
  return (
    <>
      {/* Header with background image */}
      <Box
        sx={{
          height: "45vh",
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            
          }}
        />
      </Box>

      {/* Profile Card */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 6 , marginTop:2}}>
        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2}>
              <Avatar
                alt="Guilherme Brida"
                src={foto}
                sx={{ width: 80, height: 80, mx: "auto", mt: -8, border: "3px solid white" }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" fontWeight="bold">
                Guilherme Brida
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <b>Full Stack Software Developer</b> 
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  I'm a Full Stack Software Developer passionate about technology, innovation, and solving complex problems.
                  I have experience building APIs, web platforms, mobile apps, automations, and embedded systems,
                  always with a strong focus on performance, scalability, and security.
              </Typography>
              <Link href="#" underline="hover" sx={{ display: "inline-block", mt: 1 }}>
                More about me →
              </Link>
            </Grid>
            <Grid item xs={12} sm={2} textAlign="center">
              <Button variant="outlined">FOLLOW</Button>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Blog Section */}
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Check my latest blogposts
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image="https://source.unsplash.com/random/300x200?sig="
                  alt="Blogpost"
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {i === 1 ? "Rover raised $65 million" : "MateLabs machine learning"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i === 1
                      ? "Finding temporary housing for your dog should be as easy as renting an Airbnb."
                      : "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT..."}
                  </Typography>
                  <Link href="#" underline="hover" sx={{ display: "inline-block", mt: 1 }}>
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 8, py: 4, bgcolor: "grey.100" }}>
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Author;

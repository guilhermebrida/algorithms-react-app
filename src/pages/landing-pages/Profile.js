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
import BackGroudWallPaper from "../../components/BackGroudWallPaper/BackGroundWallPaper"
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer"
import Contact from "../../components/Contact/Contact";

function Author() {
  return (
    <>
      {/* <BackGroudWallPaper />

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
      <ProjectsContainer /> */}




    <BackGroudWallPaper />
      <Container maxWidth="xl" sx={{ position: "relative", mt: -5, zIndex: 2 }}>
        <Card sx={{ mx:"auto", p: 4, borderRadius: 3, boxShadow: 4 }}>
          <Box sx={{ textAlign: "center", mt: -2 }}>
            <Avatar
              alt="Guilherme Brida"
              src={foto}
              sx={{
                width: 100,
                height: 100,
                border: "4px solid white",
                mx: "auto",
              }}
            />
          </Box>

          <Box sx={{ mt: 3,alignContent:"center" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={12}>
                <Typography variant="h5" fontWeight="bold">
                  Guilherme Brida
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <b style={{gap:10}}>Full Stack Software Developer</b>
                </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      marginTop: 10,
                      padding: "2px 8px",
                      fontSize: "0.6rem",
                      minWidth: "unset"
                    }}
                    href="https://www.linkedin.com/in/guilherme-de-brida-dev"
                  >
                    FOLLOW
                  </Button>

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  I'm a Full Stack Software Developer passionate about technology, innovation, and solving complex problems.
                  I have experience building APIs, web platforms, mobile apps, automations, and embedded systems,
                  always with a strong focus on performance, scalability, and security.
                </Typography>
                <Link href="https://www.linkedin.com/in/guilherme-de-brida-dev" underline="hover" sx={{ display: "inline-block", mt: 1 }}>
                  More about me →
                </Link>
              </Grid>
            </Grid>
            <Box sx={{ mt: 6 }}>
              <ProjectsContainer />
            </Box>
          </Box>
        </Card>
      </Container>

      <Contact />

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

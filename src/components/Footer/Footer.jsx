import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        py: 4,
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          {['Company', 'About Us', 'Team', 'Products', 'Blog', 'License'].map((item, index) => (
            <Grid item key={index}>
              <Link href="#" underline="none" color="text.secondary" sx={{ fontSize: 14 }}>
                {item}
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box mt={2}>
          <IconButton href="https://www.facebook.com/guilhermebrida/" color="inherit" size="small">
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://x.com/guibrida" color="inherit" size="small">
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://www.instagram.com/guilhermebrida/" color="inherit" size="small">
            <InstagramIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/guilherme-de-brida-dev/" color="inherit" size="small">
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://github.com/guilhermebrida" color="inherit" size="small">
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ mt: 2, fontSize: 12 }}>
          Copyright © 2025 Material by Guilherme Brida.
        </Typography>
      </Container>
    </Box>
  );
}

import React from "react";
import { AppBar, Toolbar, Button, Typography, Box, Link} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

export default function TransparentNavbar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "none", 
        color: "white", 
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          MeuSite
        </Typography>
        <Box >
          {/* <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Home</Button>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Algorithms</Button>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Contato</Button>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}><GitHubIcon fontSize="smal" sx={{marginRight:1}}/> Github</Button> */}
          <Link component={RouterLink} to="/" underline="none" color="white" mx={1}>Home</Link>
          <Link component={RouterLink} to="/algorithms" underline="none" color="white" mx={1}>Algorithms</Link>
          <Link href="#contato" underline="none" color="white" mx={1}>Contato</Link>
          <Link href="https://github.com/guilhermebrida" underline="none" color="white" target="_blank" mx={1} ><GitHubIcon fontSize="smal" sx={{marginRight:1}}/>Github</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

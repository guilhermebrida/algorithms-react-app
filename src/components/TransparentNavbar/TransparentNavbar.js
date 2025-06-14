import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

export default function TransparentNavbar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "none", // ou blur(6px) se quiser leve efeito vidro
        color: "white", // ou escuro, depende da imagem de fundo
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          MeuSite
        </Typography>
        <Box>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Home</Button>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Sobre</Button>
          <Button sx={{ color: "white", textTransform: "none", mx: 1 }}>Contato</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

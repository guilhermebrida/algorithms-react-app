// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2', // Azul padrão
    },
    secondary: {
      main: '#dc004e', // Rosa
    },
    background: {
        default: '#f3f2f2',
        paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
     mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none', // remove o CAPS LOCK
        },
      },
    },
  },
});

export default theme;

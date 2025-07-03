// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
        default: '#f3f2f2',
        paper: 'rgb(245, 245, 245)',
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

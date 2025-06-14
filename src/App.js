import './App.css';
import Profile from './pages/landing-pages/Profile';
import theme from './assets/theme/index'
import { ThemeProvider ,CssBaseline} from '@mui/material';
import TransparentNavbar from './components/TransparentNavbar/TransparentNavbar';
function App() {
  return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="App">
          <TransparentNavbar />
          <Profile />
        </div>
      </ThemeProvider>
  );
}

export default App;

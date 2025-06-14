import './App.css';
import Profile from './pages/landing-pages/Profile';
import theme from './assets/theme/index'
import { ThemeProvider ,CssBaseline} from '@mui/material';

function App() {
  return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="App">
          <Profile />
        </div>
      </ThemeProvider>
  );
}

export default App;

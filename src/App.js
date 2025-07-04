import './App.css';
import Profile from './pages/landing-pages/Profile';
import theme from './assets/theme/index'
import { ThemeProvider ,CssBaseline} from '@mui/material';
import TransparentNavbar from './components/TransparentNavbar/TransparentNavbar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Algorithms from './pages/landing-pages/Algorithms'
import ContactPage from './pages/landing-pages/ContactPage';
function App() {
  return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="App">
          <Router>
          <TransparentNavbar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          </Router>
        </div>
      </ThemeProvider>
  );
}

export default App;

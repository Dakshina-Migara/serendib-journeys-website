import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <HomePage />
      <AboutPage />
    </>
  )
};
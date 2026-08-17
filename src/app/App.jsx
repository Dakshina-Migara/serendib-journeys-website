import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DestinationPage from '../pages/DestinationPage/DestinationPage';
import ToursPage from '../pages/ToursPage/ToursPage';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <HomePage />
      <AboutPage />
      <DestinationPage />
      <ToursPage />
    </>
  )
};
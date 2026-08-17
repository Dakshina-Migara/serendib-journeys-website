import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DestinationPage from '../pages/DestinationPage/DestinationPage';
import ToursPage from '../pages/ToursPage/ToursPage';
import TestimonialsPage from '../pages/TestimonialsPage/TestimonialsPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import Footer from '../common/components/Footer/Footer';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <HomePage />
      <AboutPage />
      <DestinationPage />
      <ToursPage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </>
  )
};
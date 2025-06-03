import { useState, useEffect } from 'react';
import './App.css';
import './app.scss';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reserve from "./components/Reserve";
import Booking from "./components/Booking";
import Investment from "./components/Investment";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
// import Contact from "./components/Contact";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div><LoadingPage /></div>;

  return (
    <div className="min-h-screen">
      <Navbar />
      {showBooking ? (
        <>
          <Booking onBack={() => setShowBooking(false)} />
          <Footer />
        </>
      ) : (
        <>
          <Hero onBookClick={() => setShowBooking(true)} />
          <About />
          <Reserve />
          <Gallery />
          <Activities />
          <FAQ />
          <Review />
          {/* <Contact /> */}
          <Investment />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

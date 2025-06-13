import { useState, useEffect } from 'react';
import './App.css';
import './app.scss';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reserve from "./components/Reserve";
import Booking from "./components/Booking";
// import Investment from "./components/Investment";
// import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
// import Review from "./components/Review";
import Contact from "./components/Contact";
// import Activities from "./components/Activities";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import fr from "./fr.json";
import en from "./en.json";
import Vision from "./components/Vision";
import Lexperience from "./components/Lexperience";
import Fondation from "./components/Fondation";

function App() {
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [language, setLanguage] = useState("FR");
  const translations = { FR: fr, EN: en };
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div><LoadingPage /></div>;

  return (
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} translations={translations} />
      {showBooking ? (
        <>
          <Booking language={language} t={t} onBack={() => setShowBooking(false)} />
          <Footer language={language} t={t} />
        </>
      ) : (
        <>
          <Hero language={language} t={t} onBookClick={() => setShowBooking(true)} />
          {/* <About language={language} t={t} /> */}
          <Vision />
          <Lexperience />
          {/* <Fondation /> */}
          <Reserve language={language} t={t} />
          {/* <Gallery language={language} t={t} /> */}
          {/* <Activities language={language} t={t} /> */}
          {/* <FAQ language={language} t={t} /> */}
          {/* <Review language={language} t={t} /> */}
          {/* <Contact language={language} t={t} /> */}
          {/* <Investment language={language} t={t} /> */}
          <Footer language={language} t={t} />
        </>
      )}
    </div>
  );
}

export default App;

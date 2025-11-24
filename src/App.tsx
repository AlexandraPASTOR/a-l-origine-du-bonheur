import './App.css'
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from './components/Header/Header';
import IllustrationBanner from './components/IllustrationBanner';
import About from './components/About';
import Services from './components/Services/Services';
import Office from './components/Office/Office';
import Faq from './components/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Wave from './components/Wave';
import SmoothScroll from './components/SmoothScroll';
import MentionsLegales from './components/Footer/MentionsLegales';
import PolitiqueConfidentialite from './components/Footer/PolitiqueConfidentialite';


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si on a un hash (#prestations, #faq, etc.)
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Sinon, comportement normal : remonter en haut
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}


function HomePage() {
  return (
    <>
      <IllustrationBanner />
      <About />
      <Wave type="top" />
      <Services />
      <Wave type="bottom" />
      <Office />
      <Wave type="top" />
      <Faq />
      <Wave type="bottom" />
      <Contact />
    </>
  );
}

function App() {

return (
<Router>
      <ScrollToTop />
      <SmoothScroll />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        theme="light"
      />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>

      <Footer />
</Router>
  );
}

export default App;
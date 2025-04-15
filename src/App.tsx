import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './font.css'
import { Routes, Route } from "react-router-dom";
import Header from "./app/pages/header/Header";
import Footer from "./app/pages/footer/Footer";
import HomePage from "./app/pages/home-page/HomePage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./app/privacypolicy/PrivacyPolicy";

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // No hash — scroll to top on pathname change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}
function App() {
  return (
    <>
     <ScrollToHashElement />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

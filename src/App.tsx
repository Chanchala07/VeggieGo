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
import Disclaimer from "./app/disclaimer/Disclaimer";
import Termsandcondition from "./app/termsandcondition/Termsandcondition";
import RefundPolicy from "./app/refundpolicy/RefundPolicy";

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
  const location = useLocation();
  const hideHeaderFooter = ["/privacypolicy", "/disclaimer","/termsandconditions","/refundpolicy"].includes(location.pathname);

  return (
    <>
      <ScrollToHashElement />
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/termsandconditions" element={<Termsandcondition />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;

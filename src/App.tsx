import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './font.css'
import { Routes, Route, Router } from "react-router-dom";
import Header from "./app/pages/header/Header";
import Footer from "./app/pages/footer/Footer";
import HomePage from "./app/pages/home-page/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

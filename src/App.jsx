'use client'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Workshop from "./components/WorkShop/Workshop";
import Technical from "./components/Technical/Technical";
import NonTechnical from "./components/NonTechnical/NonTechnical";
// import Footer from "@/components/LandingPage/Footer";
// import Footer from "@/components/Footer2";
import { useEffect } from "react";
import Lenis from 'lenis';
const App = () => {
  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])
  return (
    <Router>
      {/* Routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/nontechnical" element={<NonTechnical />} />
        {/* Redirect to LandingPage if no route matches */}
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
    </Router>
  );
};
export default App;

// export default App;



// import Sponsers from "./components/LandingPage/Sponsers";
import EventList from "./components/LandingPage/EventList";
import Hackathon from "./components/Hackathon/Hackathon";
// import Workshop from "./components/WorkShop/Workshop";

// export default function App() {

//   useEffect( () => {
//     const lenis = new Lenis()

//     function raf(time) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
//   }, [])

//   return (
//     <main>
//       <Workshop />
//       <Footer />
//     </main>
//   );
// }
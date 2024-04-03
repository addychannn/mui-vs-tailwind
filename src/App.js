import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import HeroSection from "./pages/HeroSection";
import { AboutMui } from "./pages/AboutMui";
import { Navbar } from "./pages/Navbar";

export default function App() {
  return (
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/about-mui" element={<AboutMui />} />
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

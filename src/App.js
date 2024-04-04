import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import HeroSection from "./pages/HeroSection";
import { AboutMuiWithTeam } from "./pages/MUI/AboutMuiWithTeam";
import { ProsAndConsMui } from "./pages/MUI/ProsAndConsMui";
import { AboutTailwindwithComponents } from "./pages/Tailwind/AboutTailwindwithComponents.js";
import { MuiTeam } from "./pages/MUI/MuiTeam.js";
import { TailwindTeam } from "./pages/Tailwind/TailwindTeam.js";
import { ProsAndConsTailwind } from "./pages/Tailwind/ProsAndConsTailwind.js";
import { QuestionPage } from "./pages/QuestionPage.js";
import { ComparisonPage } from "./pages/ComparisonPage.js";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/about-mui" element={<AboutMuiWithTeam />} />
          <Route
            path="/about-mui-team"
            element={<MuiTeam />}
          />
          <Route path="/pros-and-cons" element={<ProsAndConsMui />} />
          <Route
            path="/about-tailwind"
            element={<AboutTailwindwithComponents />}
          />
          <Route
            path="/about-tailwind-creator"
            element={<TailwindTeam />}
          />
           <Route
            path="/pros-and-cons-tailwind"
            element={<ProsAndConsTailwind />}
          />
          <Route path="/" element={<HeroSection />} />
          <Route path="/question-page" element={<QuestionPage />} />
          <Route path="/comparison-page" element={<ComparisonPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

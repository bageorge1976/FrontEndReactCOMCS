import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import Home from "./pages/Home";
//import Programs from "./pages/Programs";

import Math from "./pages/Math";
import Science from "./pages/Science";
import Computing from "./pages/Computing";
import Contests from "./pages/Contests";
import News from "./pages/News";
import Admissions from "./pages/Admissions";
import Store from "./pages/Store";
import Recruit from "./pages/Recruit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sponsors from "./pages/Sponsors";
import HonorRoll from "./pages/HonorRoll";
import IvyLeague from "./pages/IvyLeague";
import TutoringCenter from "./pages/TutoringCenter";



export default function App() {
  return (
    
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/honor-roll" element={<HonorRoll />} />
        <Route path="/ivy-league" element={<IvyLeague />} />
        <Route path="/tutoring-center" element={<TutoringCenter />} />
        <Route path="/programs/math" element={<Math />} />
        <Route path="/programs/science" element={<Science />} />
        <Route path="/programs/computing" element={<Computing />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/news" element={<News />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/store" element={<Store />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


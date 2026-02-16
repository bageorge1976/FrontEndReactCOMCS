import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet,  useLocation } from "react-router-dom";
import logo from "../assets/COMCS-logo.png";

export default function SiteShell() {
//  const [q, setQ] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const dropdownRef = useRef(null);
  //const navigate = useNavigate();
  const { pathname } = useLocation();

  // 1. We ONLY use Effect for side effects like scrolling.
  // We no longer call setState here to satisfy ESLint.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Helper to close all menus manually
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  // This replaces the problematic useEffect logic
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 /*  const onSearch = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/news?q=${encodeURIComponent(q.trim())}`);
    closeAllMenus();
  }; */

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
      isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full shadow-sm">
        
        {/* ROW 1: Logo & Hamburger */}
        <div className="bg-white border-b">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between gap-2 py-3">
            <Link to="/" onClick={closeAllMenus} className="flex items-center gap-2 flex-1 min-w-0">
              <img src={logo} alt="COMCS logo" className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0" />
              <div className="flex flex-col leading-tight min-w-0">
                <h1 className="text-[13px] sm:text-lg md:text-xl font-bold flex flex-wrap gap-x-1">
                  <span className="text-comcs-blue">Calgary</span>
                  <span className="text-black">Olympic</span>
                  <span className="text-red-600">Math</span>
                  <span className="text-purple-600">Computer</span>
                  <span className="text-green-600">Science</span>
                  <span className="text-[#5a3e2b]">School</span>
                </h1>
                <div className="text-[10px] sm:text-xs text-neutral-600">COMCS</div>
              </div>
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden shrink-0 p-2 rounded-lg bg-neutral-100 border border-neutral-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* ROW 2: Desktop Navbar */}
        <div className="hidden md:block bg-comcs-blue">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="flex items-center gap-1 py-1">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <NavLink to="/news" className={navClass}>News</NavLink>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)} 
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition bg-comcs-blueLight text-orange-50 hover:brightness-110"
                >
                  Programs
                  {/* Arrow Icon */}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute left-0 top-full pt-2 w-52 transition-all ${isProgramsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  <div className="bg-white border rounded-xl shadow-xl p-1">
                    <Link to="/programs/math" onClick={closeAllMenus} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 rounded-lg">Mathematics</Link>
                    <Link to="/programs/science" onClick={closeAllMenus} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 rounded-lg">Sciences</Link>
                    <Link to="/programs/computing" onClick={closeAllMenus} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 rounded-lg">Computing</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/tutoring-center" className={navClass}>Tutoring</NavLink>
              <NavLink to="/admissions" className={navClass}>Admissions</NavLink>
              <NavLink to="/contests" className={navClass}>Contests</NavLink>
              <NavLink to="/honor-roll" className={navClass}>Honor Roll</NavLink>
              <NavLink to="/ivy-league" className={navClass}>Ivy League</NavLink>
              <NavLink to="/sponsors" className={navClass}>Sponsors</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>
          </div>
        </div>

        {/* MOBILE DRAWER: Flattened with manual close handlers */}
        <div className={`md:hidden fixed inset-0 top-16.25 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-4 space-y-2 overflow-y-auto h-full bg-neutral-50">
            <Link to="/" onClick={closeAllMenus} className="mobile-link">Home</Link>
            <Link to="/news" onClick={closeAllMenus} className="mobile-link">News</Link>
            
            <div className="pt-4 pb-1 px-4 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Our Programs</div>
            <Link to="/programs/math" onClick={closeAllMenus} className="mobile-link border-l-4 border-red-500 font-bold text-comcs-blue">Mathematics</Link>
            <Link to="/programs/science" onClick={closeAllMenus} className="mobile-link border-l-4 border-green-500 font-bold text-comcs-blue">Sciences</Link>
            <Link to="/programs/computing" onClick={closeAllMenus} className="mobile-link border-l-4 border-purple-500 font-bold text-comcs-blue">Computing</Link>
            
            <div className="pt-4 pb-1 px-4 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">General</div>
            <Link to="/tutoring-center" onClick={closeAllMenus} className="mobile-link">Tutoring</Link>
            <Link to="/admissions" onClick={closeAllMenus} className="mobile-link">Admissions</Link>
            <Link to="/contests" onClick={closeAllMenus} className="mobile-link">Contests</Link>
            <Link to="/honor-roll" onClick={closeAllMenus} className="mobile-link">Honor Roll</Link>
            <Link to="/ivy-league" onClick={closeAllMenus} className="mobile-link">Ivy League</Link>
            <Link to="/sponsors" onClick={closeAllMenus} className="mobile-link">Sponsors</Link>
            <Link to="/contact" onClick={closeAllMenus} className="mobile-link">Contact</Link>
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
 
            <footer className="bg-comcs-blue text-white border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={logo} alt="COMCS logo" className="object-contain" />
              <div className="text-sm font-bold leading-tight text-center md:text-left">
                Calgary Olympic Math &<br /> Computer Science School
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="font-bold text-orange-50">Programs</div>
              <Link onClick={handleLinkClick} to="/programs/math" className="text-white/70 hover:text-white transition text-sm">Mathematics</Link>
              <Link onClick={handleLinkClick} to="/programs/science" className="text-white/70 hover:text-white transition text-sm">Sciences</Link>
              <Link onClick={handleLinkClick} to="/programs/computing" className="text-white/70 hover:text-white transition text-sm">Computing</Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="font-bold text-orange-50">Community</div>
              <Link onClick={handleLinkClick} to="/honor-roll" className="text-white/70 hover:text-white transition text-sm">Honor Roll</Link>
              <Link onClick={handleLinkClick} to="/sponsors" className="text-white/70 hover:text-white transition text-sm">Sponsors</Link>
              <Link onClick={handleLinkClick} to="/news" className="text-white/70 hover:text-white transition text-sm">News</Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="font-bold text-orange-50">Contact</div>
              <a href="mailto:coms@olympicmathschool.ca" className="text-white/70 hover:text-white transition text-sm break-all">coms@olympicmathschool.ca</a>
              <Link onClick={handleLinkClick} to="/contact" className="text-white/70 hover:text-white transition text-sm">Find Us</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Calgary Olympic Math & Computer Science School. All rights reserved.
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .mobile-link { display: block; padding: 1.25rem 1rem; border-radius: 0.75rem; background-color: white; border: 1px solid #e5e7eb; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
        .mobile-link:active { background-color: #f9fafb; }
      `}} />
    </div>
  );
}
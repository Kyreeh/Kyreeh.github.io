import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Welcome from "./Welcome";
import Projects from "./Projects";
import Activism from "./Activism";
import News from "./News";

import "./App.css";

const NotFound: React.FC = () => <h2>Page Not Found</h2>;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // -------------------------------
  // Load theme: saved OR system
  // -------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else if (saved === "light") {
      setDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      // No saved preference → use system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      setDarkMode(systemPrefersDark);

      if (systemPrefersDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, []);

  // ----------------------------------------------------------
  // Sync with OS theme changes — *unless* the user chose one
  // ----------------------------------------------------------
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");

      // If user manually chose a theme, ignore system changes
      if (saved) return;

      if (e.matches) {
        setDarkMode(true);
        document.body.classList.add("dark");
      } else {
        setDarkMode(false);
        document.body.classList.remove("dark");
      }
    };

    media.addEventListener("change", handleSystemThemeChange);
    return () => media.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // ----------------------------------------
  // Manual toggle — always saves preference
  // ----------------------------------------
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  };

  // ----------------------------------------

  return (
    <Router>
      <nav>
  <Link to="/" className="nav-button">Home</Link>
  <div className="nav-icons">
    <a
      href="https://www.linkedin.com/in/kyreeherron/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/linkedin.png" alt="LinkedIn" className="nav-icon" />
    </a>

    <a
      href="https://www.instagram.com/fnb_midlands/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/instagram.png" alt="Instagram" className="nav-icon" />
    </a>
  </div>

  <button onClick={toggleDarkMode}>
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>
</nav>


      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activism" element={<Activism />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Kyree Herron — All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;

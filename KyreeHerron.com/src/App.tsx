import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Welcome from "./Welcome";
import Projects from "./Projects";
import Activism from "./Activism";
import News from "./News";

import "./App.css";

const NotFound: React.FC = () => <h2>Page Not Found</h2>;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.body.classList.toggle("dark", newMode);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

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

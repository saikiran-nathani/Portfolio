import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-mode");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const isLight = theme === "light";
    if (isLight) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>

        <div className={styles.actions}>
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* 🍔 Mobile Menu Button */}
          <img
              className={styles.menuBtn}
              src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
              }
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>


  );
};

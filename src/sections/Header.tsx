"use client";
import { useState, useEffect } from "react";

const scrollToSection = (id: string) => {
  const sectionElement = document.getElementById(id);
  if (sectionElement) {
    window.scrollTo({
      top: sectionElement.offsetTop,
      behavior: "smooth",
    });
  }
};

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about"];
      let current = "";

      sections.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavItemClasses = (id: string) =>
    `nav-item ${
      activeSection === id
        ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        : ""
    }`;

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => scrollToSection("home")}
          className={getNavItemClasses("home")}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={getNavItemClasses("projects")}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={getNavItemClasses("about")}
        >
          About
        </button>
      </nav>
    </div>
  );
};

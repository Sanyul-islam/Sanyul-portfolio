"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const navbarHeight = 100;

      let currentSection = "#home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarHeight) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveLink(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="font-display header-gradient text-xl font-bold"
        >
          Sanyul<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative block py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="">
          <Button className="rounded-full">Hire Me</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-panelLine text-muted transition hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative block border-b border-panelLine/50 py-4 text-sm font-medium ${
                    isActive ? "text-accent" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-12 rounded-full bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

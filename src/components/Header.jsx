// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPathname = () => {
    // Remove hash and get pathname
    const hash = location.hash.split("#")[1] || "/";
    return hash;
  };

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Privacy Policy", "/privacy-policy"],
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            to="/"
            className="relative z-10 flex items-center transition-transform hover:scale-105"
          >
            <img
              src="/assets/footer2.webp"
              alt="Mintair Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navLinks.map(([title, path]) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  getPathname() === path
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute inset-x-0 top-0 origin-top transform p-4 transition ${
            isMobileMenuOpen
              ? "translate-y-16 sm:translate-y-20 opacity-100 scale-100"
              : "opacity-0 scale-95 -translate-y-full"
          }`}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="space-y-4">
              {navLinks.map(([title, path]) => (
                <Link
                  key={path}
                  to={path}
                  className={`block text-base font-medium ${
                    getPathname() === path.replace("/#", "")
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {title}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-primary-dark transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

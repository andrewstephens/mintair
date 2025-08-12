import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Branding and Contact Section */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="/assets/footer2.webp"
                alt="Mintair Logo"
                className="w-48 h-auto object-contain"
              />
            </Link>
            <div className="text-gray-500 text-base space-y-2">
              <p>Expert HVAC solutions for California homeowners.</p>
              <p>CSLB #1096383 - Voltaic Construction</p>
              <p>13230 E IMPERIAL HWY # 300 BREA, CA 92821-6751</p>
              <p>
                <a
                  href="tel:8776468658"
                  className="text-primary-500 hover:underline"
                >
                  Call Now: 877-646-8658
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-base text-gray-600 hover:text-gray-900 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/maintenance"
                    className="text-base text-gray-600 hover:text-gray-900 transition"
                  >
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="text-base text-gray-600 hover:text-gray-900 transition"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-base text-gray-600 hover:text-gray-900 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2024 mintair.co. All rights reserved. | Powered by Voltaic
          </p>
        </div>
      </div>
    </footer>
  );
}

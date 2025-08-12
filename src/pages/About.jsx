// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-b from-primary to-[#1D354C] mt-20">
              Keeping California Cool, Keeping It Classic.
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-12">
              At Mint, we blend modern efficiency with old-school reliability to
              keep your home and business perfectly comfortable—year-round.
              Inspired by a time when service meant something, we show up on
              time, do the job right, and leave things fresher than we found
              them. From the summer heat to coastal chills, Mint is your go-to
              for crisp, clean air and effortless comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "13+", label: "Years Experience" },
              { number: "5,000+", label: "Projects Completed" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Emergency Service" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-[#1D354C]-600">
                  {stat.number}
                </div>
                <div className="mt-2 text-base font-semibold text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
            Licensed & Certified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-blue-50 mb-4">
                  <svg
                    className="w-8 h-8 text-[#1D354C]-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  B - General Building
                </h3>
                <p className="text-gray-600">
                  General Building Contractor License
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-blue-50 mb-4">
                  <svg
                    className="w-8 h-8 text-[#1D354C]-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">C10 - Electrical</h3>
                <p className="text-gray-600">Electrical License</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-[#1D354C]-50 mb-4">
                  <svg
                    className="w-8 h-8 text-[#1D354C]-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">C20 - HVAC</h3>
                <p className="text-gray-600">HVAC License</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Serving All of Southern California
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our service area covers Los Angeles, Orange County, and San
                Diego, providing prompt, reliable HVAC services to homeowners
                across the region.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { area: "Los Angeles County", icon: "🌴" },
                  { area: "Orange County", icon: "🍊" },
                  { area: "San Diego County", icon: "🏖️" },
                  { area: "Riverside County", icon: "🌅" },
                  { area: "San Bernardino County", icon: "🏔️" },
                  { area: "Ventura County", icon: "🌊" },
                ].map(({ area, icon }) => (
                  <li
                    key={area}
                    className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-xl mr-2">{icon}</span>
                    <span className="text-gray-600 font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  style={{ padding: "20px" }}
                >
                  {/* Simplified SoCal shape */}
                  <path
                    d="M50,50 L350,50 L350,250 L50,250 Z"
                    fill="#fff"
                    stroke="#2563eb"
                    strokeWidth="3"
                  />
                  {/* County markers */}
                  <circle cx="150" cy="100" r="10" fill="#1D354C" />
                  <text x="170" y="105" className="text-sm" fill="#1e40af">
                    Los Angeles
                  </text>

                  <circle cx="180" cy="150" r="10" fill="#1D354C" />
                  <text x="200" y="155" className="text-sm" fill="#1e40af">
                    Orange County
                  </text>

                  <circle cx="200" cy="200" r="10" fill="#1D354C" />
                  <text x="220" y="205" className="text-sm" fill="#1e40af">
                    San Diego
                  </text>

                  {/* Pacific Ocean */}
                  <text
                    x="60"
                    y="280"
                    className="text-lg font-bold"
                    fill="#1D354C"
                  >
                    Pacific Ocean 🌊
                  </text>
                </svg>
              </div>
              <div className="absolute -right-6 -top-6 bg-[#1D354C]-600 text-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <LeadCaptureForm className="shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

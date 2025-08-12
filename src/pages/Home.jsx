import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoBanner from "../components/LogoBanner";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import ReviewCarousel from "../components/ReviewCarousel";
import MeetTheTeam from "../components/Members";

export default function Home() {
  const services = [
    {
      title: "Plumbing",
      description:
        "Professional repairs, installations, and maintenance services.",
      icon: "🔧",
      link: "/services/plumbing",
    },
    {
      title: "Water Filtration",
      description: "Clean, pure water solutions for your home.",
      icon: "💧",
      link: "/services/filtration",
    },
    {
      title: "Air Conditioning",
      description: "Expert cooling solutions for year-round comfort.",
      icon: "❄️",
      link: "/services/ac",
    },
    {
      title: "Sewer Repair",
      description: "Fast, reliable sewer line repairs and maintenance.",
      icon: "🚰",
      link: "/services/sewer",
    },
    {
      title: "Water Heaters",
      description: "Installation and repair of modern water heating systems.",
      icon: "🌡️",
      link: "/services/water",
    },
    {
      title: "Heating",
      description: "Efficient heating solutions for your comfort.",
      icon: "🔥",
      link: "/services/heating",
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning and clog removal services.",
      icon: "🔧",
      link: "/services/drain",
    },
    {
      title: "Air Purifier",
      description: "Advanced air purification for healthier indoor air.",
      icon: "🌬️",
      link: "/services/air",
    },
  ];

  const [reviews, setReviews] = useState([
    {
      name: "John D.",
      rating: 5,
      review:
        "Outstanding service! They were professional, efficient, and solved our AC issues quickly.",
      pfp: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sarah M.",
      rating: 5,
      review: "Great experience! Very knowledgeable team and fair pricing.",
      pfp: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mike R.",
      rating: 5,
      review: "Excellent service from start to finish. Highly recommend!",
      pfp: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Emily W.",
      rating: 5,
      review:
        "They installed our new HVAC system perfectly. Very happy with the results!",
      pfp: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "David P.",
      rating: 5,
      review: "Fast response time and quality work. Would use again!",
      pfp: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Lisa K.",
      rating: 5,
      review: "Very professional team. They explained everything clearly.",
      pfp: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "James H.",
      rating: 5,
      review: "Reliable and efficient service. Great attention to detail.",
      pfp: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Amy B.",
      rating: 5,
      review: "Excellent customer service and workmanship. Very satisfied!",
      pfp: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Robert M.",
      rating: 5,
      review: "Professional installation and great follow-up service.",
      pfp: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Jennifer L.",
      rating: 5,
      review: "They went above and beyond my expectations. Highly recommend!",
      pfp: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "William T.",
      rating: 5,
      review: "Expert technicians who know their stuff. Fair prices too!",
      pfp: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Karen S.",
      rating: 5,
      review: "Prompt, professional, and courteous service every time.",
      pfp: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Thomas R.",
      rating: 5,
      review: "Best HVAC service in the area. Won't go anywhere else!",
      pfp: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Patricia N.",
      rating: 5,
      review: "Fantastic work ethic and great results. Thank you!",
      pfp: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "George C.",
      rating: 5,
      review: "Very impressed with their knowledge and professionalism.",
      pfp: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Susan D.",
      rating: 5,
      review: "Excellent service and communication throughout the process.",
      pfp: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Richard B.",
      rating: 5,
      review: "Quality work at reasonable prices. Very happy customer!",
      pfp: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Linda W.",
      rating: 5,
      review: "They made the whole process easy and stress-free.",
      pfp: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      name: "Charles M.",
      rating: 5,
      review: "Trustworthy and reliable. Always deliver great results.",
      pfp: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Mary J.",
      rating: 5,
      review: "Outstanding customer service and technical expertise.",
      pfp: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Michael S.",
      rating: 5,
      review:
        "Excellent energy-efficient solutions and top-notch installation.",
      pfp: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative isolate bg-[#E5E3DC] ">
        <div className="relative isolate">
          {/* HERO IMAGE SECTION WITH TEXT AND BUTTON HERE */}
          <div className="relative h-screen mb-12">
            <div className="absolute inset-0">
              <img
                src="/assets/banner.png"
                alt="HVAC Professional Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-screen">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
                  Keeping California Cool, Keeping It Classic
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  At Mint, we blend modern efficiency with old-school
                  reliability to keep your home and business perfectly
                  comfortable—year-round. Inspired by a time when service meant
                  something, we show up on time, do the job right, and leave
                  things fresher than we found them. From the summer heat to
                  coastal chills, Mint is your go-to for crisp, clean air and
                  effortless comfort.
                </p>
                <div className="flex gap-x-6 justify-left">
                  <Link
                    to="/contact"
                    className="rounded-md bg-primary px-3 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    to="/services"
                    className="rounded-md bg-white px-3 py-1.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            {/* CALL TO ACTION  HERE */}
            <div className="pt-10">
              <LogoBanner />
            </div>

            {/* 3 CERTIFICATIONS HERE */}
            <div className="mt-16">
              <h2 className="text-center text-2xl font-bold mb-8">
                Licensed & Certified Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-aut mb-10">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 ">
                  <div className="text-center ">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 bg-[#B6D0C1]">
                      <svg
                        className="w-8 h-8 text-primary "
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
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 ">
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 bg-[#B6D0C1]">
                      {" "}
                      <svg
                        className="w-8 h-8 text-primary"
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
                    <h3 className="text-lg font-semibold mb-2">
                      C10 - Electrical
                    </h3>
                    <p className="text-gray-600">Electrical License</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 bg-[#B6D0C1]">
                      {" "}
                      <svg
                        className="w-8 h-8 text-primary"
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

            {/* <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="group"
                    >
                      <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300 h-[280px] flex flex-col">
                        <span className="text-4xl mb-4 block">
                          {service.icon}
                        </span>
                        <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-gray-600 flex-grow">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
            {/* Banner with parallax effect and overlay */}
            <div className="relative h-[70vh] mb-12 overflow-hidden -mx-6 lg:-mx-8">
              <div
                className="absolute inset-0 md:bg-fixed"
                style={{
                  backgroundImage: 'url("/assets/hvacimage.webp")',

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "scroll",
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </div>
            {/* FUN ANIMATON HERE */}

            <ReviewCarousel />
            {/* Final Call to action to forward to the contact page. Make this absolutely amazing.  */}

            <MeetTheTeam />
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

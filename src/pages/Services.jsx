// src/pages/Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";

export default function Services() {
  const redServices = [
    {
      title: "Air Conditioning",
      description:
        "Expert installation, repair, and maintenance of all AC systems. Keep your home cool and efficient.",
      icon: "❄️",
      link: "/services/ac",
    },
    {
      title: "Heating",
      description:
        "Complete heating solutions including furnace repair, replacement, and seasonal maintenance.",
      icon: "🔥",
      link: "/services/heating",
    },
    {
      title: "Water Heaters",
      description:
        "Installation and service of traditional and tankless water heaters for optimal efficiency.",
      icon: "💧",
      link: "/services/water-heaters",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Advanced air purification and ventilation solutions for healthier indoor environments.",
      icon: "🌬️",
      link: "/services/air-quality",
    },
  ];

  const blueServices = [
    {
      title: "Plumbing",
      description:
        "Professional plumbing services for repairs, installations, and maintenance.",
      icon: "🔧",
      link: "/services/plumbing",
    },
    {
      title: "Heat Pump Solutions",
      description:
        "Energy-efficient heating and cooling for year-round comfort.",
      icon: "🌡️",
      link: "/services/heat-pump",
    },
    {
      title: "Insulation",
      description:
        "Energy-efficient insulation solutions to improve your home's comfort and reduce costs.",
      icon: "🏠",
      link: "/services/insulation",
    },
    {
      title: "Electrical Panel Upgrade",
      description:
        "Modern electrical panel upgrades for improved safety and efficiency.",
      icon: "⚡",
      link: "/services/electrical",
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100/20" />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-10">
              Complete HVAC & Home Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional solutions for all your heating, cooling, and home
              comfort needs.
            </p>
          </div>
        </div>
      </div>

      {/* Red Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {redServices.map((service) => (
              <Link key={service.title} to={service.link} className="group">
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary-200 transition-all duration-300">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Services Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {blueServices.map((service) => (
              <Link key={service.title} to={service.link} className="group">
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary-500 transition-all duration-300 h-[280px] flex flex-col">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500">
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
      </div>

      {/* Value Propositions */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Buy Now, Install Today
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Order today and we can schedule a date and time to deliver your
                equipment and properly install it.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                Serving All of Southern California
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                With multiple locations throughout the Southland, we're here to
                serve you quickly and conveniently.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-bprimarylue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                Free, Friendly, Second Opinion
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our experts provide honest advice to improve your home's
                comfort, whether you choose us or not.
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.pfp}
                    alt={`${review.name}'s profile`}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-gray-600">{review.rating}.0</p>
                </div>
                <p className="text-gray-600 mb-4">"{review.review}"</p>
                <p className="font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Free Quote
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fill out the form below to get a free, no-obligation quote for our
              services.
            </p>
          </div>
          <div className="mt-16">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </div>
  );
}

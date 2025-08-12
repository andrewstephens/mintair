import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-b from-[#E5E3DC] to-white min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <div className="prose max-w-none">
              <section className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  SMS Communication Opt-In Policy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Mint Air Co., we value your privacy and want to ensure
                  transparent communication regarding our SMS messaging
                  services.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  How We Collect Consent
                </h3>
                <p className="text-gray-700 mb-4">
                  We collect opt-in consent verbally from our customers through
                  two methods:
                </p>
                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    In person at our physical location
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Over the phone during customer service calls
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Registration Process
                </h3>
                <p className="text-gray-700 mb-4">
                  During first-time registration, customers are asked to provide
                  their phone number. Our staff is trained to explicitly ask if
                  customers would like to opt in to receive:
                </p>
                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    SMS-based billing notifications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Appointment reminders
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Dispatch notifications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Job completion surveys
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Important Disclosures
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Customers are verbally informed of the following:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Message and data rates may apply
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Message frequency may vary
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Text HELP for support or more information
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Text STOP to unsubscribe at any time
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Data Protection
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <p className="text-gray-700">
                    We are committed to protecting your privacy. Your phone
                    number will not be shared with third parties for marketing
                    or promotional purposes.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our privacy policy or SMS
                    communications, please contact us at:
                  </p>
                  <a
                    href="mailto:support@mintair.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    support@mintair.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

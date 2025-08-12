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
      <div className="bg-gradient-to-b from-[#E5E3DC] to-white min-h-screen py-16 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <section className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                SMS Communication Policy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At MintAir Co., we value your privacy and are committed to
                transparent communication about our SMS messaging services.
              </p>

              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    How We Collect Consent
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>In person at our physical location</li>
                    <li>Over the phone during customer service calls</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Services You Can Opt Into
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>SMS-based billing notifications</li>
                    <li>Appointment reminders</li>
                    <li>Dispatch notifications</li>
                    <li>Job completion surveys</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Important Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Message and data rates may apply</li>
                    <li>Message frequency varies</li>
                    <li>Text HELP for support or more information</li>
                    <li>Text STOP to unsubscribe at any time</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Data Protection Commitment
                  </h3>
                  <p className="text-gray-700">
                    We are committed to protecting your privacy. Your phone
                    number will not be shared with third parties for marketing
                    or promotional purposes.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h3>
                <p className="text-gray-700">
                  If you have any questions about our privacy policy or SMS
                  communications, please contact us at{" "}
                  <a
                    href="mailto:support@mintair.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@mintair.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useEffect } from "react";
import { services } from "../data/services";

export default function ServiceDetail() {
  const [service, setService] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.split("/").pop().replace("/", "");
      window.scrollTo(0, 0); // Add this line to scroll to top

      if (services[id]) {
        setService(services[id]);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#B6D0C1", opacity: 0.7 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: "#1D354C" }}
            >
              {service.title}
            </h1>
            <p className="text-xl" style={{ color: "#1D354C" }}>
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600">{service.fullDescription}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-gray-800">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation
            </p>
            <a
              href="/#/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

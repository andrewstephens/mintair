import { services } from "../data/services";

export default function ServicesPage() {
  console.log("Available services:", Object.keys(services));

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(services).map((service) => (
            <a
              key={service.id}
              href={`/#/services/${service.id}`}
              className="group"
            >
              <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300 h-[280px] flex flex-col">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 flex-grow">
                  {service.shortDescription}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

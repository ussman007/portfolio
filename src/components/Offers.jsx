import React from "react";
import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaServer,
  FaPalette,
  FaTools,
  FaShopify,
} from "react-icons/fa";

function Offers() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <FaCode className="text-4xl text-purple-400" />,
      description:
        "Building responsive and modern web applications using React, Next.js, and other cutting-edge technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: <FaMobile className="text-4xl text-purple-400" />,
      description:
        "Creating cross-platform mobile applications for iOS and Android using React Native.",
      technologies: ["React Native", "iOS", "Android"],
    },
    {
      id: 3,
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-purple-400" />,
      description:
        "Developing robust server-side applications and RESTful APIs.",
      technologies: ["Node.js", "Express", "REST APIs"],
    },
    {
      id: 4,
      title: "Database Design",
      icon: <FaDatabase className="text-4xl text-purple-400" />,
      description:
        "Designing and implementing efficient database structures and queries.",
      technologies: ["MongoDB", "Firebase", "Realtime Database"],
    },
    {
      id: 5,
      title: "Shopify Store Development & Customization",
      icon: <FaShopify className="text-4xl text-purple-400" />,
      description:
        "Custom Shopify stores with sleek design & smooth functionality to boost sales.",
      technologies: [
        "Shopify Theme Editor",
        "Shopify Liquid",
        "HTML, CSS, JavaScript",
        "Payment & Chat Integrations",
      ],
    },
    {
      id: 6,
      title: "API Integration",
      icon: <FaTools className="text-4xl text-purple-400" />,
      description:
        "Seamlessly integrating third-party APIs and services into applications.",
      technologies: ["REST APIs", "API Testing", "Stripe"],
    },
  ];

  return (
    <section id="offers" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300
                border border-purple-500/20 hover:border-purple-500/50
                shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;

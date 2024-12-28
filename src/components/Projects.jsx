import { useState } from "react";
import ImageViewer from "./ImageViewer";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
      images: [
        "/data/portfolio-1.jpg",
        "/data/portfolio-2.jpg",
        "/data/portfolio-3.jpg",
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      status: "completed",
      githubLink: "https://github.com/ussman007/portfolio",
      demoVideo: "/data/portfolio-demo.mp4",
    },
    {
      id: 2,
      title: "Ware-House Managment App",
      description:
        "Streamline Your Inventory with Our Warehouse Management App – Efficient tracking, real-time updates, and seamless control for all your storage needs",
      images: [
        "/data/project1-ii.png",
        "/data/proejct1-i .png",
        "/data/proejct1- iii.png",
      ],
      technologies: ["React-Native", "Firebase-auth", "Firebase-database"],
      status: "completed",
    },
    {
      id: 3,
      title: "Chat Application",
      description:
        "Real-time chat application with features like group chat and file sharing.",
      images: ["/data/chat-1.jpg", "/data/chat-2.jpg", "/data/chat-2.jpg"],
      technologies: ["React", "Socket.io", "Express"],
      status: "in-development",
      githubLink: "https://github.com/ussman007/chat-app",
    },
    {
      id: 4,
      title: "Fashion Cave Ecommerce Application",
      description:
        "Real-time chat application with features like group chat and file sharing.",
      images: ["/data/chat-1.jpg", "/data/chat-2.jpg"],
      technologies: ["React", "Socket.io", "Express"],
      status: "in-development",
      githubLink: "https://github.com/ussman007/chat-app",
    },
  ];

  // State to track current image for each project
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Add new state for image viewer
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewerImageIndex, setViewerImageIndex] = useState(0);

  const nextImage = (projectId) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        ((prev[projectId] || 0) + 1) %
        projects.find((p) => p.id === projectId).images.length,
    }));
  };

  const prevImage = (projectId) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        ((prev[projectId] || 0) -
          1 +
          projects.find((p) => p.id === projectId).images.length) %
        projects.find((p) => p.id === projectId).images.length,
    }));
  };

  // Handler for opening the image viewer
  const openImageViewer = (projectId, imageIndex) => {
    setSelectedProject(projects.find((p) => p.id === projectId));
    setViewerImageIndex(imageIndex);
  };

  // Handler for closing the image viewer
  const closeImageViewer = () => {
    setSelectedProject(null);
    setViewerImageIndex(0);
  };

  // Handlers for navigation in the viewer
  const nextViewerImage = () => {
    setViewerImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevViewerImage = () => {
    setViewerImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  const getStatusBadge = (status) => {
    const badges = {
      completed: "bg-green-500/20 text-green-300",
      "in-progress": "bg-yellow-500/20 text-yellow-300",
      "in-development": "bg-blue-500/20 text-blue-300",
    };
    return badges[status] || "bg-purple-500/20 text-purple-300";
  };

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Featured Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300
              border border-purple-500/20 hover:border-purple-500/50
              shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
          >
            {/* Image Carousel */}
            <div className="relative h-48 bg-purple-900/20 rounded-lg mb-4 overflow-hidden group">
              <img
                src={project.images[currentImageIndex[project.id] || 0]}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  openImageViewer(
                    project.id,
                    currentImageIndex[project.id] || 0
                  )
                }
                loading="lazy"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(project.id)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => nextImage(project.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    →
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === (currentImageIndex[project.id] || 0)
                            ? "bg-purple-500"
                            : "bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Status Badge */}
            <div className="mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusBadge(
                  project.status
                )}`}
              >
                {project.status.replace("-", " ").charAt(0).toUpperCase() +
                  project.status.slice(1)}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.demoVideo && (
                <button
                  onClick={() => window.open(project.demoVideo)}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Watch Demo →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add the ImageViewer component */}
      {selectedProject && (
        <ImageViewer
          images={selectedProject.images}
          currentIndex={viewerImageIndex}
          onClose={closeImageViewer}
          onNext={nextViewerImage}
          onPrev={prevViewerImage}
        />
      )}
    </section>
  );
}

export default Projects;

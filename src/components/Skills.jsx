import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "React-Native",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "GraphQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Firebase", " NX Monorepo", "Hubstaff"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Photoshop", "UI/UX"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/50">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Skills & Technologies
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400 text-center mb-6">
              {skillGroup.category}
            </h3>
            <div className="grid gap-4">
              {skillGroup.items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center group"
                >
                  <div
                    className="w-full p-3 bg-purple-900/20 rounded-lg
                    border border-purple-500/20 group-hover:border-purple-500/50 
                    transition-all duration-300 text-center
                    shadow-[0_0_15px_rgba(147,51,234,0.1)] 
                    group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
                  >
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

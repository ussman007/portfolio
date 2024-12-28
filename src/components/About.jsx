import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Hi there! I'm Muhammad Bilal, Senior Software Engineer with 3+
              years of extensive experience in designing and developing
              high-performance web and mobile applications. Specializes in
              React, Node.js, and React Native, with a strong focus on scalable
              architectures, cross-platform solutions, and AI-powered
              applications. Demonstrates leadership by managing teams, training
              developers, and leading technical innovations for startups and
              large-scale projects.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I enjoy tackling complex problems and turning ideas into reality
              through clean and efficient code.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                What I will do for you?:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Full Stack Web Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Mobile app Development (ios/android)</span>
                </li>

                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Push Notifications (Firebase)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span> AI Chatbots</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>API Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Component Libraries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Payment Integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">→</span>
                  <span>Real-Time Features</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-300 font-medium">Experience</h4>
                  <p className="text-gray-400">
                    3+ years as a Sofware Engineer
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Education</h4>
                  <p className="text-gray-400">
                    Bachelor's in Computer Science
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-gray-400">Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Api integration",
                  "cross-platform mobile apps development",
                  "Tech Innovation",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

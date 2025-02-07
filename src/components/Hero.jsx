import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-purple-300 bg-clip-text text-transparent animate-pulse">
              Muhammad Usman
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-[80%] break-words">
            Full stack Developer | Your vision my code!
          </p>

          <div className="mt-8 ">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 cursor-pointer"
            >
              View Projects <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-purple-500/50">
            <img
              src="/data/profile.jpg" // Add your photo path here
              alt="Muhammad Bilal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
    </section>
  );
}

export default Hero;

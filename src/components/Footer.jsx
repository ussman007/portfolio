function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/ussman007" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/m-usman-akram-473800299/",
    },
  ];

  return (
    <footer className="py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ucoderr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

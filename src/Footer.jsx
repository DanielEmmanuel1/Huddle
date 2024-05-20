const Footer = () => {
  return (
    <footer className="bg-white py-6 border-b border-b-gray-400 mb-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./images/Logo.svg" alt="HuddleLogo" />
        </div>
        <nav className="flex space-x-6">
          <a href="#about-us" className="text-gray-700 hover:text-gray-900">
            About us
          </a>
          <a
            href="#what-drives-us"
            className="text-gray-700 hover:text-gray-900"
          >
            What drives us
          </a>
          <a href="#features" className="text-gray-700 hover:text-gray-900">
            Huddlee features
          </a>
          <a href="#roadmap" className="text-gray-700 hover:text-gray-900">
            Product roadmap
          </a>
        </nav>
        <button className="bg-[#5C5CE9] text-white px-4 py-2 rounded-md text-xs">
          Join The Waitlist
        </button>
      </div>
    </footer>
  );
};

export default Footer;

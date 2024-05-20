const Navbar = () => {
  return (
    <div className="border-b border-b-gray-400">
      <nav className="flex justify-between items-center py-[24px] px-[120px] h-[100px]">
        <img src="./images/Logo.svg" alt="HuddleLogo" />
        <div className="flex gap-[2.5rem]">
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">What drives us</span>
          <span className="cursor-pointer">Huddle Features</span>
          <span className="cursor-pointer">Product Roadmap</span>
        </div>
        <button className="bg-[#5C5CE9] text-white px-4 py-2 rounded-md text-xs">Join The Waitlist</button>
      </nav>
    </div>
  );
};

export default Navbar;

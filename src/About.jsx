const AboutUs = () => {
  return (
    <div className="my-32">
      <div className="w-[75rem] px-[120px] flex flex-col justify-center items-center mx-auto gap-6 mb-8">
        <h2 className="bg-[#c340a04d] text-[#F178B6] px-4 py-2 text-sm rounded-md">
          Our Services
        </h2>
        <p className="text-[3rem]">About Us</p>
        <p className="w-[55rem] text-center text-[20px] text-gray-500">
          The rise of remote work has created challenges for managing teams
          effectively. Employers worry about productivity and accountability,
          while employees can feel isolated and stressed by constant monitoring.
        </p>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon1.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">Team Chat</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon2.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">Time Tracking</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon3.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">Items Search</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon4.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">Attandance</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon5.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">KPIs</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
          <img src="./images/Icon6.svg" alt="" />
          <p className="text-xs text-gray-500 font-semibold">Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

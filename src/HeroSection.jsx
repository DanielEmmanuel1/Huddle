const HeroSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="ml-20">
        <div className="w-[45.5rem]">
          <p
            className="font-bold text-[3.15rem]
      "
          >
            Building trust for remote work and{" "}
            <span className="text-[#4B9BD0]">productivity</span> in remote
            workers.
          </p>
          <p className="font-normal mt-4">
            Huddle.io targets small and medium-sized
            <br /> businesses (SMBs) with remote or hybrid workforces.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-4 mt-4">
          <div className="flex items-center gap-4">
            <img src="./images/Subtract.svg" alt="" />
            <p>Clear Work Objectives</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="./images/Subtract.svg" alt="" />
            <p>Investment Reports Every Month</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="./images/Subtract.svg" alt="" />
            <p>Saving Money For The Future </p>
          </div>
        </div>

        <div className="relative">
          <input placeholder="Enter your email address"
            className="px-3 w-2/3 py-4 rounded-lg relative outline-none"
            type="email"
            name=""
            id=""
          />
          <button className="bg-[#5C5CE9] text-white rounded-md px-3 py-2 text-sm absolute left-1/2 top-[0.65rem]">
            Join Waitlist
          </button>
        </div>
      </div>

      <div
        className="h-[34.7rem] w-[40rem] mt-[12rem] bg-auto bg-left-top bg-clip-content"
        style={{ backgroundImage: `url('./images/animate.svg')` }}
      ></div>
    </div>
  );
};

export default HeroSection;

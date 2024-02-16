import motif from "../assets/about.svg"
const AboutUs = () => {
  return (
    <>
    <div className=" relative bg-[#0A090F] flex flex-col items-center mr-11 ml-14 mt-14 lg:mx-32 rounded-[20px] pt-[25px] pb-[70px]">
      <h2 className="text-[#4299E1] text-[24px] font-bold">About Us</h2>
      <p className="text-white text-center lg:font-semibold relative z-10">
        Welcome to Career-Up, your dedicatedally in the startups. At
        Career-Up,were committed to enhancing your entrepreneurial journey.
      </p>
      <img width={70} src={motif} alt="" className="absolute -left-10 top-2 lg:-top-5 lg:-left-8"/>
    </div>
    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap flex items-center justify-center ">
      <h1 className="text-[120px] text-[#8FC7F0] -rotate-6 font-bold text-crop py-6 lg:hidden ">START-UP START-UP</h1>
      <h1 className="text-[120px] text-[#8FC7F0] -rotate-3 font-bold text-crop py-6 hidden lg:block  ">START-UP START-UP START-UP</h1>
      </div>
      </>
  );
};

export default AboutUs;

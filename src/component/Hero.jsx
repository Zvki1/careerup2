import "../Hero.css";
import Motif from "../assets/Motif.svg"
const Hero = () => {
  return (
    <div className=" pt-24 bg-[#0A090F] text-white relative">
      {/* h1 and cta div */}
      <div className="pl-7 flex flex-col gap-10 items-start">
      <h1 className="text-[36px] font-bold  ">
        Empower Your <br />
        Startup Journey with <br />
      <span className="gradient-text"> Career-Up</span> 
      </h1>
      <button type="button" className="text-white bg-gradient-to-r from-[#4269E1]  to-[#BEE3F8] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try it now</button>
      </div>
      {/* image */}
      <img width={90} src={Motif} alt=""  className="absolute top-8 right-0"/>
      {/* the two cards */}
      <div>
        
      </div>
    </div>
  );
};

export default Hero;

import "../Hero.css";
import Motif from "../assets/Motif.svg"
import Motif2 from "../assets/lg.svg"
import MemberCard from "./MemberCard";

const Hero = () => {
  return (
    <div className=" pt-24 bg-[#0A090F] text-white relative pb-20 lg:mx-32 lg:rounded-b-[40px]">
      {/* h1 and cta div */}
      <div className="pl-7 lg:pl-16 flex flex-col gap-10 items-start">
      <h1 className="text-[36px] lg:text-[56px] font-bold relative z-30  ">
        Empower Your <br />
        Startup Journey <br /> with 
      <span className="gradient-text"> Career-Up</span> 
      </h1>
      <button type="button" className="text-white bg-gradient-to-r from-[#4269E1]  to-[#BEE3F8] hover:bg-gradient-to-br lg:text-2xl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try it now</button>
      </div>
      {/* image */}
      <img width={90} src={Motif} alt=""  className="absolute z-0 top-8 right-0 lg:hidden"/>
      <img width={290} src={Motif2} alt=""  className="hidden lg:block lg:absolute z-0 top-8 right-0 "/>
      {/* the two cards */}
      <div className=" pt-20 w-full flex flex-col lg:flex-row  items-center gap-7 lg:pl-16 lg:relative"> 
        <MemberCard role="Designer" name="Raouf mohachrif"/>
        <MemberCard role="Marketing" name="ilham kilimonaro"/>
      </div>
    </div>
  );
};

export default Hero;

const Teams = () => {
  return (
    <>
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap flex items-center justify-center ">
        <h1 className="text-[80px] text-black opacity-10 -rotate-6 font-bold text-crop py-6 lg:hidden ">
          VERIFIED TEAMS
        </h1>
        <h1 className="text-[120px] text-black opacity-10 -rotate-3 font-bold text-crop py-6 hidden lg:block  ">
          VERIFIED TEAMS VERIFIED TEAMS
        </h1>
      </div>
      <h2 className="text-center text-[25px] opacity-20 font-bold md:hidden">
        Verified Teams{" "}
      </h2>
      {/* cards container */}
      <div className="flex items-center justify-center flex-col  lg:px-32 overflow-hidden ">
      {/* team card */}
     <div className="flex flex-col lg:flex-row">
     <div className=" max-w-96 py-11 px-8 flex flex-col gap-4 text-center border-2 border-[#A0AEC0] mx-4 my-6 rounded-[40px] ">
        <h1 className="text-[#4299E1] text-[40px] font-bold">WallMart Team</h1>
        <p className="text-[20px]">
          Its a good choice for customers who dont want to spend so much.
        </p>
        <div className="flex flex-col gap-5 items-start text-black  ">
          <div>
            <span className="bg-[#BEF8D2]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
             Developer
            </span>
            <span className="bg-[#F3BEF8]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Designer
            </span>
          </div>
          <div>
            <span className="bg-yellow-100  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Marketing
            </span>
            <span className="bg-[#F8DDBE]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              HR
            </span>
          </div>
        </div>
      </div>
      {/* tean card */}
      <div className=" max-w-96 py-11 px-8 flex flex-col gap-4 text-center border-2 border-[#A0AEC0] mx-4 my-6 rounded-[40px] ">
        <h1 className="text-[#4299E1] text-[40px] font-bold">Fikrati Team</h1>
        <p className="text-[20px]">
          Its a good choice for customers who dont want to spend so much.
        </p>
        <div className="flex flex-col gap-5 items-start text-black  ">
          <div>
            <span className="bg-[#BEF8D2]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
             Developer
            </span>
            <span className="bg-[#F3BEF8]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Designer
            </span>
          </div>
          <div>
           
            <span className="bg-[#F8DDBE]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              HR
            </span>
          </div>
        </div>
      </div>
     </div>
      {/* team card */}
      <div className=" max-w-96 py-11 px-8 flex flex-col gap-4 text-center border-2 border-[#A0AEC0] mx-4 my-6 rounded-[40px] ">
        <h1 className="text-[#4299E1] text-[40px] font-bold">twenty Team</h1>
        <p className="text-[20px]">
          Its a good choice for customers who dont want to spend so much.
        </p>
        <div className="flex flex-col gap-5 items-start text-black  ">
          <div>
            <span className="bg-[#BEF8D2]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
             Developer
            </span>
            <span className="bg-[#F3BEF8]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Designer
            </span>
          </div>
          <div>
            <span className="bg-yellow-100  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Marketing
            </span>
            <span className="bg-[#F8DDBE]  text-[25px] font-medium me-2 px-6 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              HR
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Teams;

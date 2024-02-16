import women1 from '../assets/women1.svg'
import women2 from '../assets/women2.svg'

const Cta = () => {
  return (
    <div>
        <div className="text-center flex flex-col gap-4 items-center my-4 mx-3 md:hidden">
            <h2 className="text-[#4299E1] text-[24px] font-bold">Make your grow,together</h2>
            <p className=" font-semibold">With Career-Up, success isnt just a possibility its a
certainty. Join us and watch your startup thrive with a 
team of verified experts by your side</p>
            <button type="button" className="text-white bg-gradient-to-r from-[#4269E1]  to-[#BEE3F8]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-7 py-2.5 text-center  mb-2">Try Now </button>
        </div>

        {/* desktop cta */}
        <div className=' flex-row hidden md:flex lg:px-36 items-center'>
            <img width={250} src={women1} alt="" />
            <div className="text-center flex flex-col gap-4 items-center my-4 mx-3 ">
            <h2 className="text-[#4299E1] text-[50px] font-bold">Make you <br /> grow,together</h2>
            <p className=" font-semibold">With Career-Up, success isnt just a possibility its a
certainty. Join us and watch your startup thrive with a 
team of verified experts by your side</p>
            <button type="button" className="text-white bg-gradient-to-r from-[#4269E1]  to-[#BEE3F8]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-12 py-2.5 text-center  mb-2">Try Now </button>
        </div>
            <img width={250} src={women2} alt="" />
        </div>
    </div>
  )
}

export default Cta
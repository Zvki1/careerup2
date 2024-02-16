import Logo from '../assets/logo.png'
import Hamburger from '../assets/hamburger.png'
const NavBar = () => {
  return (
    <div>
   <nav className=' flex flex-row lg:hidden justify-between pt-6 px-7  w-full z-10 absolute '>
    <a href="#">
        <img width="34px" src={Logo} alt="lg" />
    </a>
    <button>
        <img width="36px" src={Hamburger} alt="hm" />
    </button>
   </nav>
   <nav className='hidden lg:flex flex-row justify-between items-center bg-[#0A090F] text-white font-meduim text-[20px] py-5 mx-32 px-5'>
   <a href="#">
        <img width="34px" src={Logo} alt="lg" />
    </a>
    <ul className='flex flex-row gap-5'>
      <li className='hover:text-[#BEE3F8]'> <a href=""> Home </a></li>
      <li className='hover:text-[#BEE3F8]'> <a href=""> About Us </a></li>
      <li className='hover:text-[#BEE3F8]'> <a href=""> Our Flow </a></li>
      <li className='hover:text-[#BEE3F8]'> <a href=""> FAQ </a></li>
    </ul>
    <button type="button" className="text-white bg-gradient-to-r from-[#4269E1]  to-[#BEE3F8] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Build your team </button>
   </nav>
   </div>
   
  )
}

export default NavBar
import Logo from '../assets/logo.png'
import Hamburger from '../assets/hamburger.png'
const NavBar = () => {
  return (
   <nav className=' flex flex-row justify-between pt-6 px-7  w-full z-10 absolute '>
    <a href="#">
        <img width="34px" src={Logo} alt="lg" />
    </a>
    <button>
        <img width="36px" src={Hamburger} alt="hm" />
    </button>
   </nav>
  )
}

export default NavBar
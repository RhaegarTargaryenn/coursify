import React  ,{useState , useEffect} from 'react';
import logo from '../Assests/logo.png';
import {RxHamburgerMenu} from 'react-icons/rx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {

  useEffect(() => {
    AOS.init();
  }, []);

const [open , setOpen]= useState(false);

function handleOpen(){
   setOpen(!open);
}


  return (
    <div className='flex justify-between py-7 px-[10%]'>
         <div className='w-32' data-aos="flip-up">
            <img src={logo} alt='logo' />
         </div>

         <div className={open ? 'lg:inline' : 'lg:inline hidden'}>
        <ul className='text-blue-500 lg:flex lg:flex-row lg:mt-0 mt-10 lg:gap-0 gap-y-6x flex flex-col text-[17px] font-bold tracking-wider'>
          <li className='lg:pl-0 pl-6' data-aos="fade-down">For Employers</li>
          <div><hr/></div>
          <li className='pl-6'data-aos="fade-down">Refer & Earn$15K</li>
          <div><hr/></div>
          <li className='pl-6'data-aos="fade-down">Login</li>
          <div><hr/></div>
          <li className='pl-6'data-aos="fade-down">Sign Up</li>
        </ul>
      </div>

        <span className='lg:hidden inline text-gray-400 text-[40px]' onClick={handleOpen}>
             <RxHamburgerMenu/>
             </span>
    </div>
  )
}

export default NavBar
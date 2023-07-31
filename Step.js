import React, {useEffect} from 'react'
import step1 from '../Assests/step1.png';
import step2 from '../Assests/step2.png';
import step3 from '../Assests/step3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Step = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='sm:flex justify-around px-auto py-16 bg-[#f2ffff]'>
          <div className=' flex flex-col items-center mt-6'>
            <div className=' pl-7' data-aos="zoom-in">
                <img src={step1} width={70} alt='step-1'/>
            </div>

            <div className='pt-6 pl-10 '>
                <p className='lg:text-[15px] md:text-[14px] font-bold lg:tracking-widest md:tracking-wide lg:ml-10 '>Step 1:<span> COMPLETE PROFILE</span></p>
                <p className='font-thin lg:text-[14px]  pt-3 lg:tracking-widest'>Once you approved, we showcase you to<br/>
                  <span className='lg:ml-4'>leading indian technlogy startups</span></p>
            </div>
          </div>



          <div className='flex flex-col items-center px-5 py-4 lg:pt-0 sm:mt-0 mt-10 lg:ml-0 md:ml-8 sm:ml-10 '>
            <div className='lg:pl-5 md:pr-6 'data-aos="zoom-in">
                <img src={step2} width={70} alt='step-1'/>
            </div>

            <div className='pt-6 lg:pl-10  md:pl-5'>
                <p className='lg:text-[15px] md:text-[14px] font-bold tracking-widest lg:ml-5'>Step 2:<span>RECIEVE JOB OFFERS</span></p>
                <p className='font-thin lg:text-[14px] pt-3'>Companies start sending interview request<br/>
                  <span className='lg:ml-10'>Talk to only ones you like</span></p>
            </div>
          </div>

          <div className='flex flex-col items-center lg:px-5 py-4 lg:pt-0 sm:mt-0 mt-10 lg:ml-0 md:ml-8 sm:ml-10 '>
            <div className='lg:pl-5 md:pl-10' data-aos="zoom-in">
                <img src={step3} width={70} alt='step-1'/>
            </div>

            <div className='pt-6 pl-10'>
                <p className='lg:text-[15px] md:text-[14px] font-bold tracking-widest ml-3'>Step 1:<span>RECIEVE JOB OFFERS</span></p>
                <p className='font-thin lg:text-[14px] pt-3'>Companies start sending interview request<br/>
                  <span className='lg:ml-10'>Talk to only ones you like</span></p>
            </div>
          </div>


        


          
    </div>
  )
}

export default Step
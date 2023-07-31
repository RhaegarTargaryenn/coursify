import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ApplySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex flex-col items-center pt-[8%] pb-[7%] bg-[#f2ffff]'>
              <div data-aos="slide-up">
                <h1 className='lg:text-[45px] md:text-[40px] sm:text-[30px] font-bold text-[22px]'>Find your next top tech job in 1 week.</h1>
              </div>

              <div className='pt-10 font-thin'data-aos="slide-up">
                <p className='lg:text-[22px] md:text-[17px] sm:text-[16px] text-[14px] tracking-wider px-10'><span className='bg-yellow-300 font-bold mr-2'>Are you top 2%</span>Software Enginner, Product Manager or Data Scientist?<span className='sm:inline hidden'><br/></span>
                <span className='mt-2 pl-10'>Let Leading Technology </span><span className='bg-yellow-300 font-bold mt-2'>Companies competeto Hire you.</span></p>
             </div>

             <div className='mt-10' data-aos="slide-up">
                <button className='bg-blue-500 text-white hover:px-5 hover:py-[14px] px-6 font-mono py-4 text-bold tracking-widest rounded-md mr-7 text-[17px] hover:text-blue-400 hover:border-2 hover:border-blue-400   hover:bg-white'>Apply To Join</button>
                <p className='text-[13px] pt-1 text-gray-400 tracking-wide'>100% free.It takes only 5 minutes</p>
             </div>
        
    </div>
  )
}

export default ApplySection
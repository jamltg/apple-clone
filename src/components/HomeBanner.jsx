import { IoIosArrowForward } from "react-icons/io";
import applevision from '../assets/applevision.jpg';

export default function HomeBanner() {
  return (
    <div className='bg-[rgb(251,251,251)] py-6'>
      <h1 className='text-4xl text-center font-bold p-4 md:text-6xl'>Apple Vision Pro</h1>
      <div className='flex justify-center'>
        <img 
          src={applevision} 
          alt="apple vision"
          className='max-h-[400px]'
        />
      </div>
      <h1 className='max-w-[400px] mx-auto text-2xl text-center font-bold p-4 md:text-4xl'>Welcome to the era of spacial computing.</h1>
      <div className='flex justify-center'>
        <button className='text-[rgb(255,90,0)] font-semibold border-[rgb(255,90,0)]'>
            <span className="hover:text-underline">Watch the guided tour &gt;</span>
        </button>
      </div>
    </div>
  )
}

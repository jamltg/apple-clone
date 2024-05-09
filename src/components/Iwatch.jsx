import iwatch2 from '../assets/iwatch2.jpg';
import IwatchDescription from './IwatchDescription';

export default function Iwatch() {
  return (
      <div className="relative bg-black">
        <IwatchDescription/>
        <div className='flex justify-center w-full'>
          <img
            src={iwatch2}
            alt="Apple Watch"
            className='h-[300px] lg:h-[400px]'
          />
        </div>
      </div>
  )
}

import iwatch2 from '../assets/iwatch2.jpg';

export default function Iwatch() {
  return (
      <div className="relative h-[85vh] bg-blue-200">
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${iwatch2})` }}></div>
        <div className='relative text-center z-10 pt-8'>
          <h1 className='text-white text-4xl lg:text-6xl font-semibold'>Apple Watch Series 9</h1>
          <h2 className='text-white text-xl lg:text-2xl tracking-tight mt-2'>Smarter. Brighter. Mightier.</h2>
          <p className='text-lg lg:text-xl text-[rgb(134,134,139)] mt-3'>Available starting 5.15</p>
          <div className='flex justify-center gap-4 mt-3 '>
            <button className='bg-[rgb(0,113,227)] text-xl text-white px-6 py-2 rounded-full'>Learn More</button>
            <button className='border-2 border-[rgb(0,113,226)] text-xl text-white px-6 py-2 rounded-full hover:bg-[rgb(0,113,227)]'>Order Now</button>
          </div>
        </div>
      </div>
  )
}

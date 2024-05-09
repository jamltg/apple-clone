import iphone15pro from '../assets/iphone15pro.jpg';

export default function GridIphone() {
  return (
    <div className='relative h-[520px] bg-black'>
      <div className='mx-auto'>
        <div className='text-center mt-12'>
          <h1 className='text-white text-3xl font-bold lg:text-4xl'>iPhone 15 Pro</h1>
          <h2 className='text-white text-lg tracking-tight mt-2 lg:text-xl'>Titanium. So strong. So light. So pro.</h2>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='bg-[rgb(0,113,227)] text-sm text-white px-2 py-1 rounded-full lg:text-md lg:px-4'>Learn More</button>
            <button className='border-2 border-[rgb(0,113,226)] text-sm text-[rgb(0,113,226)] px-4 py-1 rounded-full hover:bg-[rgb(0,113,227)] hover:text-white lg:text-md lg:px-4'>Buy</button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img 
            src={iphone15pro} 
            alt="iphone 15 pro" 
            className='absolute bottom-0 min-h-[290px] max-h-[320px]'
          />
        </div>
      </div>
    </div>
  )
}


{/* <div className='relative text-center z-10 pt-8'>
        <h1 className='text-white text-4xl lg:text-6xl font-semibold'>Apple Watch Series 9</h1>
        <h2 className='text-white text-xl lg:text-2xl tracking-tight mt-2'>Smarter. Brighter. Mightier.</h2>
        <p className='text-lg lg:text-xl text-[rgb(134,134,139)] mt-3'>Available starting 5.15</p>
        <div className='flex justify-center gap-4 mt-3 '>
          <button className='bg-[rgb(0,113,227)] text-lg text-white px-4 py-2 rounded-full lg:px-6'>Learn More</button>
          <button className='border-2 border-[rgb(0,113,226)] text-lg text-white px-4 py-2 rounded-full lg:px-6 hover:bg-[rgb(0,113,227)]'>Order Now</button>
        </div>
      </div> */}
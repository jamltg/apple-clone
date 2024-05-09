export default function GridAirpods() {
  return (
    <div className='relative h-[520px] bg-black'>
      <div className='mx-auto'>
        <div className='relative text-center mt-12 z-10'>
          <h1 className='text-white text-3xl font-bold lg:text-4xl'>Airpods Pro</h1>
          <h2 className='text-white text-lg tracking-tight mt-2 lg:text-xl'>Unheard-of sound on every level.</h2>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='bg-[rgb(0,113,227)] text-sm text-white px-2 py-1 rounded-full lg:text-md lg:px-4'>Learn More</button>
            <button className='border-2 border-[rgb(0,113,226)] text-sm text-[rgb(0,113,226)] px-4 py-1 rounded-full hover:bg-[rgb(0,113,227)] hover:text-white lg:text-md lg:px-4'>Buy</button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img 
            src="https://media.wired.com/photos/5db71c390aa0150008816caf/master/w_1920,c_limit/Gear-Apple_AirPods-Pro_New-Design_102819.jpg" 
            alt="airpods pro" 
            className='absolute bottom-0 min-h-[300px] max-h-[400px]'
          />
        </div>
      </div>
    </div>
  )
}

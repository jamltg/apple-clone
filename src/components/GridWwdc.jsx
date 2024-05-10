import wwdc from '../assets/wwdc.jpg'

export default function GridWwdc() {
  return (
    <div className='relative h-[520px] bg-black'>
      <div className='mx-auto'>
        <div className='w-full flex justify-center mt-10'>
          <img 
            src={wwdc} 
            alt="apple watch ultra" 
            className='absolute top-0 max-h-[380px]'
          />
        </div>
        <div className='absolute bottom-0 z-10 text-center mb-8 w-full'>
          <h2 className='text-white text-lg tracking-tight mt-2 lg:text-xl'>
            Apple Worldwide Developers Conference.
          </h2>
          <h2 className="text-white text-lg tracking-tight mt-2 lg:text-xl">
            Join us online June 10-14.
          </h2>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='bg-[rgb(0,113,227)] text-sm text-white px-4 py-2 rounded-full lg:text-md lg:px-4'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

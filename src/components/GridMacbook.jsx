import macbookair from '../assets/macbookair.jpg';

export default function GridMacbook() {
  return (
    <div className='relative h-[520px] bg-[rgb(251,251,251)]'>
      <div className='mx-auto'>
        <div className='w-full flex justify-center mt-10'>
          <img 
            src={macbookair} 
            alt="apple watch ultra" 
            className='min-h-[240px] max-h-[280px]'
          />
        </div>
        <div className='relative z-10 text-center mt-12'>
          <h1 className='text-black text-3xl font-bold lg:text-4xl'>Macbook Air</h1>
          <h2 className='text-black text-lg tracking-tight mt-2 lg:text-xl'>Lean. Mean. M3 Machine.</h2>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='bg-[rgb(0,113,227)] text-sm text-white px-4 py-2 rounded-full lg:text-md lg:px-4'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

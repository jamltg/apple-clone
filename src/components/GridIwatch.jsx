import iwatchultra from '../assets/iwatchultra.jpg';

export default function GridIwatch() {
  return (
    <div className='relative h-[520px] bg-white'>
      <div className='mx-auto'>
        <div className='text-center mt-12'>
          <h1 className='text-black text-3xl font-bold lg:text-4xl'>Apple Watch Ultra 2</h1>
          <h2 className='text-black text-lg tracking-tight mt-2 lg:text-xl'>Next level adventure.</h2>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='bg-[rgb(0,113,227)] text-sm text-white px-2 py-1 rounded-full lg:text-md lg:px-4'>Learn More</button>
            <button className='border-2 border-[rgb(0,113,226)] text-sm text-[rgb(0,113,226)] px-4 py-1 rounded-full hover:bg-[rgb(0,113,227)] hover:text-white lg:text-md lg:px-4'>Buy</button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img 
            src={iwatchultra} 
            alt="apple watch ultra" 
            className='absolute bottom-0 min-h-[250px] max-h-[310px]'
          />
        </div>
      </div>
    </div>
  )
}

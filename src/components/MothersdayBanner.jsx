import apple_logo from '../assets/apple_logo.png'
import design from '../assets/design.png'

export default function MothersdayBanner() {
  return (
    <div className="w-full pb-10" style={{backgroundImage:`url(${design})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div className="flex justify-center">
        <img 
          src={apple_logo}
          alt="apple logo design"
          className="max-h-[300px]"
        />
      </div>
      <div className=''>
        <h1 className='text-3xl text-center font-semibold md:text-5xl lg:text-6xl'>Mother&apos;s Day</h1>
        <h2 className='text-center mt-2 md:text-lg lg:text-2xl'>It&apos;s not too late to surprise Mom.</h2>
        <div className='flex justify-center mt-4'>
          <button className='bg-[rgb(0,113,227)] text-sm text-white px-4 py-2 rounded-full lg:text-md lg:px-4'>Shop</button>
        </div>
      </div>
    </div>
  )
}

import { IoLogoApple, IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="h-20 bg-[rgb(24,24,24)]">
      <ul className="w-full h-full flex justify-center items-center text-[rgb(209,209,209)]">
        <div className="pr-6">
          <IoLogoApple color={'rgb(209,209,209)'} size={20}/>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-6 lg:text-sm lg:font-semibold">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </div>
        <div className="flex ml-6 gap-6"> 
          <IoIosSearch color={'rgb(209,209,209)'} size={20}/>
          <IoBagOutline color={'rgb(209,209,209)'} size={20} />
        </div>
      </ul>
    </div>
  )
}

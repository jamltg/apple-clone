import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="h-auto bg-[rgb(251,251,251)] py-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center px-4">
        <div className="flex gap-1">
          <div className="flex items-center gap-1">
            <span>Copyright</span> 
            <PiCopyrightLight/>
            <span>2024 Apple Inc.</span>
          </div>
          <span>All rights reserved.</span>
        </div>
        <ul className="flex flex-wrap mt-3 lg:mt-0"> 
          <li className="text-xs border-r-2 px-1">Privacy Policy</li>
          <li className="text-xs border-r-2 px-1">Terms of Use</li>
          <li className="text-xs border-r-2 px-1">Sales and Refunds</li>
          <li className="text-xs border-r-2 px-1">Legal</li>
          <li className="text-xs px-1">Site Map</li>
        </ul>
      </div>
    </div>
    
  )
}

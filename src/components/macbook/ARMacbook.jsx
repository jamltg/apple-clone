import { useState } from "react"
import ARChooseColor from "./ARChooseColor";
import ARImage from "./ARImage";

export default function ARMacbook() {
  const [color, setColor] = useState('midnight')

  return (
    <div className="px-4 bg-[rgb(251,251,251)]">
      <div className="max-w-[1240px] h-full mx-auto bg-[rgb(251,251,251)] pt-20 w-full">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-between items-center px-0 gap-8 md:px-8 md:flex-row">
          <div className="w-[80%] md:w-[45%]">
            <div className="flex justify-center md:justify-start pb-6">
              <img src="https://www.apple.com/v/macbook-air/s/images/overview/routers/ar_icon__brgnkvn7cdrm_large.png" alt="unity"/>
            </div>
            <h1 className="text-4xl font-semibold text-center tracking-wide md:text-left lg:text-5xl">Use AR to see Macbook Air in your workspace.</h1>
            <p className="mt-3 mb-6 text-center md:text-left md:mt-5 lg:mt-6">Open this page using Safari on your iPhone or iPad</p>
            <ARChooseColor color={color} setColor={setColor}/>
          </div>
          <div className="px-10 md:px-0">
            <ARImage color={color}/>
          </div>
        </div>
      </div>
    </div>
  )
}

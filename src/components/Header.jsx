import { IoLogoApple, IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Cross as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import HamburgerOptions from "./HamburgerOptions";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[rgb(24,24,24)]">
      <div className="h-20 w-full px-4">
        <ul className="h-full flex justify-between items-center lg:justify-center text-[rgb(209,209,209)]">
          <div className="pr-6">
            {!isOpen && 
              <Link to="/">
                <IoLogoApple 
                  color={'rgb(209,209,209)'} 
                  size={20} 
                  className="cursor-pointer"
                />
              </Link>
            }
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-6 lg:text-sm lg:font-semibold">
            <Link to="#"><li>Store</li></Link>
            <Link to="#"><li>Mac</li></Link>
            <Link to="#"><li>iPad</li></Link>
            <Link to="#"><li>iPhone</li></Link>
            <Link to="#"><li>Watch</li></Link>
            <Link to="#"><li>AirPods</li></Link>
            <Link to="#"><li>TV & Home</li></Link>
            <Link to="#"><li>Entertainment</li></Link>
            <Link to="#"><li>Accessories</li></Link>
            <Link to="#"><li>Support</li></Link>
          </div>
          <div className="flex items-center ml-6"> 
            {!isOpen && 
              <div className="flex gap-5">
                <IoIosSearch color={'rgb(209,209,209)'} size={22} className="cursor-pointer"/>
                <IoBagOutline color={'rgb(209,209,209)'} size={20} className="cursor-pointer"/>
              </div>
            }
            <div className="block ml-2 lg:hidden">
              <Hamburger size={20} color="#D1D1D1" toggled={isOpen} toggle={setIsOpen}/>
            </div>
          </div>
        </ul>
      </div>
      <div>
        <AnimatePresence>
          {isOpen && 
            <motion.div
              key="hamburgerOptions"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <HamburgerOptions toggleHamburger={toggleHamburger}/>
            </motion.div>
          }
        </AnimatePresence>
      </div> 
    </div>
  )
}

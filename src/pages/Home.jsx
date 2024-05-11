import HomeCarousel from "../components/HomeCarousel";
import HomeGrid from "../components/HomeGrid";
import HomeIwatch from "../components/HomeIwatch";
import MothersdayBanner from "../components/MothersdayBanner";
import ARMacbook from "../components/macbook/ARMacbook";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HomeIwatch/>
      <MothersdayBanner/>
      <HomeGrid/>
      <ARMacbook/>
      <HomeCarousel/>
    </div>
  )
}

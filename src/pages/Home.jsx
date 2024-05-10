import HomeGrid from "../components/HomeGrid";
import HomeIwatch from "../components/HomeIwatch";
import MothersdayBanner from "../components/MothersdayBanner";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HomeIwatch/>
      <MothersdayBanner/>
      <HomeGrid/>
    </div>
  )
}

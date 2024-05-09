import HomeBanner from "../components/HomeBanner";
import HomeGrid from "../components/HomeGrid";
import HomeIwatch from "../components/HomeIwatch";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HomeIwatch/>
      <HomeBanner/>
      <HomeGrid/>
    </div>
  )
}

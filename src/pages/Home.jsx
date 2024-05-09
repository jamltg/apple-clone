import HomeGrid from "../components/HomeGrid";
import HomeIwatch from "../components/HomeIwatch";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HomeIwatch/>
      <HomeGrid/>
    </div>
  )
}

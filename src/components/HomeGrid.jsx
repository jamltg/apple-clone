import GridIphone from "./GridIphone";
import GridAirpods from "./GridAirpods";
import GridIwatch from "./GridIwatch";
import GridMacbook from "./GridMacbook";

export default function HomeGrid() {
  return (
    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 bg-[rgb(251,251,253)]">
      <GridIphone/>
      <GridIwatch/>
      <GridAirpods/>
      <GridMacbook/>
    </div>
  )
}

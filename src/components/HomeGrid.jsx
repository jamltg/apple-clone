import GridIphone from "./GridIphone";
import GridAirpods from "./GridAirpods";
import GridIwatch from "./GridIwatch";
import GridWwdc from "./GridWwdc";

export default function HomeGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-[rgb(251,251,253)] md:p-4">
      <GridIphone/>
      <GridIwatch/>
      <GridAirpods/>
      <GridWwdc/>
    </div>
  )
}

import ARMacbook from "../components/macbook/ARMacbook";
import MacbookAirSize from "../components/macbook/MacbookAirSize";
import MacbookLead from "../components/macbook/MacbookLead";

export default function MacbookAir() {
  return (
    <div className="h-auto">
      <MacbookLead/>
      <MacbookAirSize/>
      <ARMacbook/>
    </div>
  )
}

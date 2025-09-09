import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import ArrowIcon from "../../assets/arrow.png";

export default function DashboardCards() {
  const cardData = [
    { title: "Pending Tasks", value: "85", highlight: "Down 15% this month", description: "Engagement exceeds targets", percent: "+15%", arrow: "rotate-0" },
    { title: "Total Records", value: "3580", highlight: "20% increase this month", description: "Engagement exceeds targets", percent: "-15%", arrow: "rotate-180" },
    { title: "Weekly Prospects", value: "200", highlight: "Up 15% this month", description: "Engagement exceeds targets", percent: "+15%", arrow: "rotate-0" },
    { title: "Hot Leads", value: "80", highlight: "Strong user retention", description: "Engagement exceeds targets", percent: "-5%", arrow: "rotate-180" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-[177px] mb-2">
      {cardData.map((card, index) => (
        <Card key={index} className="flex flex-col justify-center px-6 bg-white border border-gray-200">
          <CardHeader className="p-0 mb-2 grid grid-cols-2 items-start">
            <CardTitle className="text-sm text-gray-800">{card.title}</CardTitle>

            <div className="flex items-center gap-1 text-[10px] border border-gray-200 rounded-[8px] px-2 py-0.5 justify-self-end">
              <img src={ArrowIcon} alt="arrow" className={`w-3 h-3 ${card.arrow}`} />
              <span className="font-semibold text-xs">{card.percent}</span>
            </div>

            <div className="text-4xl font-semibold">{card.value}</div>
          </CardHeader>

          <CardContent className="p-0">
            <p className="text-xs font-semibold mt-1">{card.highlight}</p>
            <p className="text-xs text-gray-500 mt-1">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

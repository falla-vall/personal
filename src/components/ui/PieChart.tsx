import type { FC } from "react";
import { ResponsivePie } from "@nivo/pie";
import { secondsToHm } from "../../utils/string";

type Props = {
  data: Array<{ id: string; label: string; value: number; color: string }>;
};

const PieChart: FC<Props> = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    tooltip={(e) => {
      const { label, value } = e.datum;
      return (
        <div className="p-2 rounded border border-yellow-300 bg-black text-white">
          <div className="font-bold">
            {label}: <span className="text-sm">{secondsToHm(value)}</span>
          </div>
        </div>
      );
    }}
    valueFormat={(value) => secondsToHm(value)}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
  />
);

export default PieChart;

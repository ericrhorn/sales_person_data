import { ResponsivePie } from "@nivo/pie";

const Chart = ({ probValue }) => {
  const probability = 100 - probValue;

  const data = [
    {
      id: `${probValue}`,
      label: `${probValue}`,
      value: probValue
    },
    {
      id: `${probability}`,
      label: `${probability}`,
      value: probability
    }
  ];

  return (
    <div style={{ height: "150px" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        // borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]]
        }}
        // defs={[
        //   {
        //     id: "dots",
        //     type: "patternDots",
        //     background: "fixed",
        //     color: "rgba(255, 255, 255, 0.3)",
        //     size: 4,
        //     padding: 1,
        //     stagger: true
        //   },
        //   {
        //     id: "lines",
        //     type: "patternLines",
        //     background: "fixed",
        //     color: "rgba(255, 255, 255, 0.3)",
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10
        //   }
        // ]}
        // fill={[
        //   {
        //     match: {
        //       id: `${probValue}`
        //     },
        //     id: "dots"
        //   },
        //   {
        //     match: {
        //       id: `${probability}`
        //     },
        //     id: "lines"
        //   }
        // ]}
        // legends={[
        //   {
        //     anchor: "bottom",
        //     direction: "row",
        //     justify: false,
        //     translateX: 0,
        //     translateY: 56,
        //     itemsSpacing: 0,
        //     itemWidth: 100,
        //     itemHeight: 18,
        //     itemTextColor: "#999",
        //     itemDirection: "left-to-right",
        //     itemOpacity: 1,
        //     symbolSize: 18,
        //     symbolShape: "circle",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemTextColor: "#000"
        //         }
        //       }
        //     ]
        //   }
        // ]}
      />
    </div>
  );
};
export default Chart;

import { TooltipProps } from "recharts";

const BarChartTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="border shadow-lg rounded-lg bg-white p-2">
        <p className="font-bold text-sm">{`${label}`}</p>
        <p>
          <div
            className="inline-block w-3 h-3 rounded-sm mr-2"
            style={{ backgroundColor: payload[0].color }}
          ></div>
          <span className="text-xs">{`${payload[0].name} : ${payload[0].value}`}</span>
        </p>
        <p>
          <div
            className="inline-block w-3 h-3 rounded-sm mr-2"
            style={{ backgroundColor: payload[1].color }}
          ></div>
          <span className="text-xs">{`${payload[1].name} : ${payload[1].value}`}</span>
        </p>
      </div>
    );
  }

  return null;
};

export default BarChartTooltip;

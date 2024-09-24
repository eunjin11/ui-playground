import { TooltipProps } from "recharts";

const BarChartTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="border shadow-xl rounded-lg bg-white p-2">
        <p className="label font-bold">{`${label}`}</p>
        <p
          className="text-sm"
          style={{ color: payload[0].color }}
        >{`${payload[0].name} : ${payload[0].value}`}</p>
        <p
          className="text-sm"
          style={{ color: payload[1].color }}
        >{`${payload[1].name} : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default BarChartTooltip;

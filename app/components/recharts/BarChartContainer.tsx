"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartTooltip from "./BarChartTooltip";

type ChartPropsType = {
  data: {
    name: string;
    uv: number;
    pv: number;
  }[];
};

const BarChartContainer = ({ data }: ChartPropsType) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={false} content={<BarChartTooltip />} />
        <Legend />
        <Bar dataKey="uv" fill="#FFD1DB" radius={[10, 10, 0, 0]} />
        <Bar
          dataKey="pv"
          fill="#E81051"
          radius={[10, 10, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartContainer;

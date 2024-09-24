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
        <Tooltip content={<BarChartTooltip />} />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 0, 0]} />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          radius={[10, 10, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartContainer;

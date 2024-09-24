import dynamic from "next/dynamic";
import SideBar from "../components/SideBar";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const DynamicChartWrapper = dynamic(
  () => import("../components/recharts/BarChartContainer"),
  {
    ssr: false,
  }
);

const RechartsPage = () => {
  return (
    <section className="max-w-[1800px] mx-auto flex">
      <SideBar />
      <div className="m-24 w-full">
        <div className="text-3xl font-bold">recharts-BarChart</div>
        <div className="text-lg my-4">recharts를 이용한 BarChart 예제</div>
        <DynamicChartWrapper data={data} />
      </div>
    </section>
  );
};

export default RechartsPage;

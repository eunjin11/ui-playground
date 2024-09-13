import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <section className="max-w-[1800px] mx-auto flex">
      <SideBar />
      <div className="m-24 w-full">
        <div className="text-3xl font-bold">
          react, next, tailwind를 ui 컴포넌트를 구현하는 사이트입니다.
        </div>
      </div>
    </section>
  );
}

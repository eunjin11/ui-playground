import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-96 p-8 m-8">
      <Link href={"/"}>
        <div className="text-2xl font-bold p-4 cursor-pointer">
          react-ui-playground
        </div>
      </Link>
      <Link href={"/dnd"}>
        <div className="text-2xl font-bold py-4 px-8 cursor-pointer bg-gray-200 rounded-full">
          dnd
        </div>
      </Link>
    </div>
  );
};

export default SideBar;

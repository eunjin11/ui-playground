import SideBar from "../components/SideBar";
import EditCategorySection from "../components/EditCategorySection";
import { CategoryType } from "../utils/types";

const allCategories: CategoryType[] = [
  {
    categoryName: "카테고리1",
    categoryId: 1,
    children: [
      { categoryName: "서브 카테고리1", categoryId: 2, children: [] },
      { categoryName: "서브 카테고리2", categoryId: 3, children: [] },
    ],
  },
  {
    categoryName: "카테고리2",
    categoryId: 4,
    children: [
      { categoryName: "서브 카테고리3", categoryId: 5, children: [] },
      { categoryName: "서브 카테고리4", categoryId: 6, children: [] },
    ],
  },
  {
    categoryName: "카테고리3",
    categoryId: 7,
    children: [
      { categoryName: "서브 카테고리5", categoryId: 8, children: [] },
      { categoryName: "서브 카테고리6", categoryId: 9, children: [] },
    ],
  },
];

export default function Home() {
  return (
    <section className="max-w-[1800px] mx-auto flex">
      <SideBar />
      <div className="m-24 w-full">
        <div className="text-3xl font-bold">카테고리 관리</div>
        <div className="my-8 h-96 rounded-3xl border bg-slate-50">
          <EditCategorySection allCategories={allCategories} />
        </div>
      </div>
    </section>
  );
}

import { FaLayerGroup } from "react-icons/fa";
import PageHeader from "@/components/PageHeader/PageHeader";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import { getAllCategory } from "@/api/services/home.services";
export default async function page() {
  const allCategory = await getAllCategory();
  return (
    <>
      <PageHeader
        bgColor={
          "bg-gradient-to-br from-[#16a34a] via-[#22c55e] to-[#4ade80] text-white"
        }
        container={"container mx-auto px-4 py-10 sm:py-14"}
        flexNav={"flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap"}
        linkName={"Categories"}
        iconStyle={"text-3xl"}
        icon={FaLayerGroup}
        h1={"All Categories"}
        desc={"Browse our wide range of product categories"}
      />

      <div className="container mx-auto gap-6 px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {allCategory?.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}

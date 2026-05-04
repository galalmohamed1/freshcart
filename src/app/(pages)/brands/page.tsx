import { getAllBrand } from "@/api/services/home.services";
import BrandCard from "@/components/BrandCard/BrandCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import { FaTags } from "react-icons/fa";

export default async function page() {
  const allBrand= await getAllBrand();
  return (
    <>
      <PageHeader
        bgColor={
          "bg-gradient-to-r from-[#7F22FE] via-[#8E51FF] to-[#C27AFF] text-white"
        }
        container={"container mx-auto px-4 py-10 sm:py-14"}
        flexNav={"flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap"}
        linkName={"Brands"}
        iconStyle={"text-3xl"}
        icon={FaTags}
        h1={"Top Brands"}
        desc={"Shop from your favorite brands"}
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {allBrand?.map((brand) => (
            <BrandCard key={brand._id} Brand={brand} />
          ))}
        </div>
      </div>
    </>
  );
}

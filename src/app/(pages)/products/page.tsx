import PageHeader from "@/components/PageHeader/PageHeader";
import { GiCardboardBox } from "react-icons/gi";
import { getAllProdects } from "@/api/services/home.services";
import ProdictCart from "@/components/Home/ProdictCart";

export default async function page() {
  const allProducts = await getAllProdects();
  return (
    <>
      <PageHeader
        bgColor={
          "bg-gradient-to-br from-[#16a34a] via-[#22c55e] to-[#4ade80] text-white"
        }
        container={"container mx-auto px-4 py-10 sm:py-14"}
        flexNav={"flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap"}
        linkName={"All Products"}
        iconStyle={"text-3xl"}
        icon={GiCardboardBox}
        h1={"All Products"}
        desc={"Explore our complete product collection"}
      />
      <div className="container mx-auto gap-6 px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">
          Showing {allProducts?.length} products
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allProducts?.map((product) => (
            <ProdictCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

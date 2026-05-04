import { getSingleCategory } from "@/api/services/home.services";
import PageHeader from "@/components/PageHeader/PageHeader";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function page({ params }: PageProps) {
  const { id } = await params;
  const singleCategory = await getSingleCategory(id);
  return (
    <>
      <PageHeader
        bgColor={
          "bg-gradient-to-br from-[#16a34a] via-[#22c55e] to-[#4ade80] text-white"
        }
        container={"container mx-auto px-4 py-10 sm:py-14"}
        flexNav={"flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap"}
        link={`/categories`}
        nameOfLink={"Categories"}
        linkName={singleCategory?.name}
        iconStyle={"text-3xl"}
        image={singleCategory?.image}
        h1={singleCategory?.name}
        desc={"Choose a subcategory to browse products"}
      />
      
      <h1>Details {id} </h1>
    </>
  );
}

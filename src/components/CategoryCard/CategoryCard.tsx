import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GetAllCategoriesData } from "@/api/types/home.interface";

type Props = {
  category: GetAllCategoriesData;
};
export default function CategoryCard({ category }: Props) {
  return (
    <>
      <Link
        href={`/categories/${category._id}`}
        className="group rounded-2xl bg-white border border-gray-100 hover:border-[#BBF7D0] shadow-sm hover:shadow-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
          <Image
            src={category.image}
            width={800}
            height={500}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="font-bold text-gray-900 text-center group-hover:text-[#16a34a] transition-colors">{category.name}</h3>
        <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-[#16a34a] flex items-center gap-1">
                View Subcategories
                <FaLongArrowAltRight />
            </span>
        </div>
      </Link>
    </>
  );
}

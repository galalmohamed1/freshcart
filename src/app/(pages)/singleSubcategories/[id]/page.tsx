
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa6';
import PageHeader from '@/components/PageHeader/PageHeader';
import { getSingleSubcategories,getSingleSubcategoriesHeader } from '@/api/services/home.services';
import NoBroductsFound from '@/components/NoBroductsFound/NoBroductsFound';
import ProdictCart from '@/components/Home/ProdictCart';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function page({ params }: PageProps) {
  const { id } = await params;
  const subcategories = await getSingleSubcategories(id);
  const nameheader = await getSingleSubcategoriesHeader(id);
  return (
    <>
      <PageHeader
        bgColor={'bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white'}
        container={'container mx-auto px-4 py-10 sm:py-14'}
        flexNav={'flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'}
        linkName={nameheader?.name}
        iconStyle={'text-3xl'}
        link={'/categories'}
        nameOfLink={'Categories'}
        icon={FaFolderOpen}
        h1={nameheader?.name}
        desc={'Browse our wide range of product categories'}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaFilter />
            Active Filters:
          </span>
          <Link
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition-colors"
            href={`/products`}
          >
            <FaFolderOpen className="text-sm" />
            {nameheader?.name || 'Back to Products'}
            <IoMdClose className="text-sm" />
          </Link>
          <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/products">
            Clear all
          </Link>
        </div>
        <div className="mb-6 text-sm text-gray-500">Showing {subcategories?.length} products</div>
        {subcategories?.length === 0 ? (
          <NoBroductsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {subcategories?.map((product) => (
              <ProdictCart key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
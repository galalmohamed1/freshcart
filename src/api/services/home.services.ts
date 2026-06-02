import { AllProdectsData, AllProdectsResponse, GetAllCategoriesData, GetAllCategoriesResponse,SingleCategoryResponse,SingleCategoryData, SingleProdectData, SingleProdectResponse, Subcategory, Root2 } from "@/api/types/home.interface";

export async function getAllProdects():Promise<AllProdectsData[]|undefined> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`,{ cache: 'force-cache' });
      const data:AllProdectsResponse = await response.json();
      return data.data;
    } catch {
    return undefined;
  }
  }

  export async function getSingleProduct(id: string): Promise<Root2> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

export async function getAllCategory():Promise<GetAllCategoriesData[]|undefined> {
   try{
     const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`,
    );
    const data:GetAllCategoriesResponse = await response.json();
    return data.data;
  }catch {
    return undefined;
  }
  }
  
  export async function getSingleCategory(id: string): Promise<SingleCategoryData | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}`);
    const data:SingleCategoryResponse = await res.json();
    return data.data;
  } catch {
    return undefined;
  }
}

  export async function getAllBrand():Promise<GetAllCategoriesData[]|undefined> {
   try{
     const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`,
    );
    const data:GetAllCategoriesResponse = await response.json();
    return data.data;
  }catch {
    return undefined;
  }
}

export async function getProductsByBrand(id: string): Promise<AllProdectsData[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?brand=${id}`);
    const data = await res.json();
    return data.data;
  } catch {
    throw new Error('Failed to fetch product');
  }
}
export async function getSingleBrand(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch brand");
    }

    const data = await res.json();
    return data.data;
  } catch {
    throw new Error("Failed to fetch brand");
  }
}

export async function getAllsubcategories(): Promise<Subcategory[] | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories`);
    const data = await res.json();
    // console.log('data subcategories',data.data);
    return data.data;
  } catch {
    return undefined;
  }
}
export async function getSingleSubcategories(id: string): Promise<AllProdectsData[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?subcategory=${id}`,{ cache: 'no-store' });
    const data = await res.json();
    return data.data;
  } catch {
    return [];
  }
}
export async function getSingleSubcategoriesHeader(id: string): Promise<SingleCategoryData | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories/${id}`,{ cache: 'no-store' });
    const data = await res.json();
    return data.data;
  } catch {
    return undefined;
  }
}
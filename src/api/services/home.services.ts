import { AllProdectsData, AllProdectsResponse, GetAllCategoriesData, GetAllCategoriesResponse,SingleCategoryResponse,SingleCategoryData, SingleProdectData, SingleProdectResponse } from "@/api/types/home.interface";

export async function getAllProdects():Promise<AllProdectsData[]|undefined> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`,{ cache: 'no-store' });
      const data:AllProdectsResponse = await response.json();
      return data.data;
    } catch {
    return undefined;
  }
  }

  export async function getSingleProduct(id: string): Promise<SingleProdectData> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`);
    const data:SingleProdectResponse = await res.json();
    return data.data;
  } catch {
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
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
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
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`);
    const data = await res.json();
    return data.data;
  } catch {
    throw new Error('Failed to fetch product');
  }
}
export async function getSingleBrand(id: string) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch brand");
    }

    const data = await res.json();
    return data.data;
  } catch {
    throw new Error("Failed to fetch brand");
  }
}
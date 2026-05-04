export interface AllProdectsResponse {
  results: number
  metadata: Metadata
  data: AllProdectsData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface AllProdectsData {
  sold: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  reviews: Review[]
  id: string
  availableColors?: string[]
  priceAfterDiscount?: number
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}

export interface GetAllCategoriesResponse {
  results: number
  metadata: Metadata
  data: GetAllCategoriesData[]
}

export interface GetAllCategoriesData {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

export interface SingleCategoryResponse {
  data: SingleCategoryData
}

export interface SingleCategoryData {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface SingleProdectResponse {
  data: SingleProdectData
}

export interface SingleProdectData {
  sold: number
  images: string[]
  subcategory: SingleProdectSubcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: SingleProdectCategory
  brand: SingleProdectBrand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  reviews: Review[]
  id: string
}

export interface SingleProdectSubcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface SingleProdectCategory {
  _id: string
  name: string
  slug: string
  image: string
}

export interface SingleProdectBrand {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Review {
  _id: string
  review: string
  rating: number
  product: string
  user: User
  createdAt: string
  updatedAt: string
  __v: number
}

export interface User {
  _id: string
  name: string
}

export interface Root2 {
  sold?: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  reviews: Review[];
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}


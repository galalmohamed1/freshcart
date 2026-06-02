import { Root2 } from "@/api/types/home.interface";

export interface cartData {
  cartOwner: string;
  createdAt: string;
  totalCartPrice: number;
  products: prodcut[];
  __v: number;
  updatedAt: string;
  _id: string;
}
interface prodcut {
  count: number;
  price: number;
  _id: string;
  product: Root2;
}
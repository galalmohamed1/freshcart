import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import ShopByCategory from "@/components/Home/ShopByCategory/ShopByCategory";
import SliderComponent from "@/components/Home/SliderHero/SliderComponent";

export default function Home() {
  return (
    <>
      <SliderComponent />
      <ShopByCategory />
      <FeaturedProducts />
    </>
  );
}

import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import DealsCards from "@/components/Home/ShopByCategory/DealsCards/DealsCards";
import ShopByCategory from "@/components/Home/ShopByCategory/ShopByCategory";
import SliderComponent from "@/components/Home/SliderHero/SliderComponent";

export default function Home() {
  return (
    <>
      <SliderComponent />
      <ShopByCategory />
      <DealsCards/>
      <FeaturedProducts />
    </>
  );
}

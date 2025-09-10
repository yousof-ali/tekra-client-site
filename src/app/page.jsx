import HeroSlider from "@/components/homeParts/heroSlider";
import AllBrands from "@/components/homeParts/brands";
import NewArrivals from "@/components/homeParts/newArrivals";
import GamerWorld from "@/components/homeParts/gamerWorld";
import TopSelling from "@/components/homeParts/topSelling";
import PopularSales from "@/components/homeParts/popularSales";
import FlashSale from "@/components/homeParts/flashSale";
import PopularSaleSecond from "@/components/homeParts/popularSaleSecond";
import Features from "@/components/homeParts/features";

import PromotionalAds1 from "@/components/ads/promotionalAds1";
import PromotionalAds2 from "@/components/ads/promotionalAds2";
import CategorySlider from "@/components/homeParts/categorySlider";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <HeroSlider />
      <CategorySlider/>
      <NewArrivals />
      <PromotionalAds1/>
      {/* <GamerWorld /> */}
      <TopSelling />

      {/* <div className="mx-auto flex gap-4 md:gap-6 lg:gap-8 flex-col sm:flex-row max-w-7xl px-4">
        <div className="w-full sm:w-1/2">
          <PromotionalAds2/>
        </div>
        <div className="w-full sm:w-1/2">
          <PromotionalAds2/>
        </div>

      </div> */}

      {/* <PopularSales /> */}

      <PopularSaleSecond />
      <FlashSale />
       <AllBrands />
      
      <Features/>
    </div>
  );
};

export default Home;

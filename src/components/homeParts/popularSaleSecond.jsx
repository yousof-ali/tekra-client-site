"use client"

import { Products } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import ProductCardThird from "../productCardThird";
import Link from "next/link";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";
import ProductCardThirdSkeleton from "../productCardThirdskeleton";

const PopularSaleSecond = () => {
  const [products, isLoading] = useAllProducts();
  return (
    <section className="mt-8 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="sectionHeading">Top Trending</h2>
          <div>
            <Link className="flex items-center text-sm md:text-base" href="/shop">
              View More <ArrowRight className="w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 gap-x-8 md:grid-cols-2 mt-4 lg:grid-cols-3 ">

          {isLoading
            ? Array(12)
              .fill(0)
              .map((_, i) => <ProductCardThirdSkeleton key={i} />)
            : products?.slice(0, 12)?.map((product, indx) => (
              <ProductCardThird product={product} key={indx} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default PopularSaleSecond;
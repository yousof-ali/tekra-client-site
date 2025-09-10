"use client";

import { ArrowRight } from "lucide-react";
import ProductCard from "../productCard";
import Link from "next/link";

import ProductCard1Skeletion from "../productCard1skeleton";
import useAllProducts from "@/hook/useAllProduct";

const NewArrivals = () => {
  const [products,isLoading] = useAllProducts();
  
return (
  <section>
    <div className="max-w-7xl mx-auto mt-12 px-4">
      <div className="text-[#1d1d1d] flex items-center justify-between  font-semibold">
        <h2
          className="sectionHeading
            "
        >
          New Arrivals
        </h2>
        <div>
          <Link className="flex text-sm items-center md:text-base" href="/shop">
            View More <ArrowRight className="w-4" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? Array(6)
            .fill(0)
            .map((_, i) => <ProductCard1Skeletion key={i} />)
          : products?.slice(0,6)?.map((product, indx) => (
            <ProductCard product={product} key={indx} />
          ))}
      </div>
    </div>
  </section>
);
};

export default NewArrivals;

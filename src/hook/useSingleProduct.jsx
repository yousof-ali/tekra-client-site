// hooks/useSingleProduct.ts
"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Products, Reviews } from "@/utils/utils";
import useAllProducts from "./useAllProduct";

const useSingleProduct = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [data,loading] = useAllProducts()

  const singleProduct = useMemo(() => {
    return data.find((product) => product.id === productId);
  }, [productId]);

  const review = useMemo(() => {
    return Reviews.filter((rev) => rev.id === productId);
  }, [productId]);

  return { singleProduct, review,loading };
};

export default useSingleProduct;

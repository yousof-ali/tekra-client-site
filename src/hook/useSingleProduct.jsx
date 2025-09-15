"use client"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
import { useParams } from "next/navigation";

const useSIngleProduct = () => {

  const axiosPublic = useAxiosPublic({});
  const { id } = useParams();

  const {
    data:product = {},
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey:['product',id],
    queryFn:async() => {
      const res = await axiosPublic.get(`/product/${id}`);
      return res.data
    },
    enabled: !!id,
  });
  return{product,isLoading,isError,error,refetch};
};

export default useSIngleProduct;
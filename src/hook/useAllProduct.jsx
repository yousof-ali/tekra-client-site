"use client"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useAllProducts = () => {

  const axiosPublic = useAxiosPublic();

  const {
    data:products = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey:['products'],
    queryFn:async() => {
      const res = await axiosPublic.get('/products');
      return res.data
    }
  });
  return[products,isLoading,isError,error,refetch];
};

export default useAllProducts;
"use client";

import Image from "next/image";

import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import facebook from "@/asset/singleProductImages/facebook.png";
import twitter from "@/asset/singleProductImages/twitter.png";
import pinterest from "@/asset/singleProductImages/pinterest.png";
import { useParams } from "next/navigation";
import useAxiosPublic from "@/hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductInfoSkeleton from "../productInfoSkeleton";
import useSIngleProduct from "@/hook/useSingleProduct";


const ProductInfo = () => {

  const {product,isLoading,isError,error,refetch} = useSIngleProduct()
  
  const rating = product?.rating ?? 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const [color, setColor] = useState("")
  const [storage, setStorage] = useState("")

  return (
    <>
      {
        isLoading ? <ProductInfoSkeleton /> : <div className="mx-4 flex flex-col my-8 gap-12 md:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="border relative rounded-md">
              <Image
                src={product?.image}
                alt="product"
                width={400}
                height={400}
                quality={100}
                className="  p-4 sm:p-8 lg:p-10 w-full h-60  sm:h-72 md:h-80 lg:h-[400px] object-contain"
              />
              <div className="absolute top-4 left-4">
                <Heart className="text-gray-400" />
              </div>
            </div>
            <div className="lg:mt-4 mt-2  flex-wrap lg:gap-4 gap-2 flex">
              {product?.allImages?.map((im, indx) => {
                return (
                  <Dialog key={indx}>
                    <DialogTrigger asChild>
                      <Image
                        src={im}
                        alt="product"
                        width={100}
                        height={200}
                        quality={100}
                        className="border cursor-pointer w-16 h-16 rounded-md sm:w-24 sm:h-24  md:p-4 p-2"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                          <div className="flex justify-center items-center">
                            <Image
                              src={im}
                              alt="img"
                              width={1000}
                              height={1000}
                              quality={100}
                              className="object-cover"
                            />
                          </div>
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter className="sm:justify-start">

                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-xs lg:text-sm text-gray-500 font-semibold uppercase mb-2">
              {product?.category}
            </h4>

            <h2 className="text-base sm:text-lg  md:text-xl lg:text-2xl">
              {product?.name}
            </h2>

            <div className="flex items-center space-x-2 ">
              <div className="flex items-center">

                {[...Array(fullStars)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}

                {hasHalfStar && <span className="text-yellow-500 text-xl">☆</span>}

                {[...Array(emptyStars)].map((_, i) => (
                  <span key={i} className="text-gray-300 text-xl">★</span>
                ))}

              </div>

              <span className="text-xs text-gray-500 lg:text-sm">
                {product?.reviewCount} reviews
              </span>
            </div>

            <div className="mt-4 text-base">
              {product?.originalPrice && (
                <span className="line-through text-gray-400 mr-4">
                  ${product?.originalPrice}
                </span>
              )}

              {/* <span className="text-red-600 text-xl font-semibold">
                ${typeof product?.price === 'object' ? product.price[0] : product.price}
              </span> */}
            </div>

            <p className="text-xs mt-3 lg:mt-6 lg:text-base text-gray-600 md:text-sm">
              {product?.description}
            </p>

            <div className="mt-3 lg:mt-5">
              <h2 className="text-xs lg:text-sm  font-semibold uppercase mb-2">COLOR</h2>
              <div className="flex flex-wrap gap-2">
                {
                  product?.colors?.map((col, indx) => {
                    return (<div onClick={() => setColor(col)} key={indx} className={`border ${col === color ? "bg-[#276680] text-white" : ""} text-xs p-2 text-gray-500 cursor-pointer lg:text-sm rounded`}>{col}</div>)
                  })
                }

              </div>
            </div>

            {product?.storage?.length > 0 && (
              <div className="mt-3 lg:mt-5">
                <h2 className="text-xs lg:text-sm  font-semibold uppercase mb-2">
                  SIZE / STORAGE
                </h2>
                <div className="flex gap-2">
                  {product.storage.map((stor, indx) => (
                    <div
                      onClick={() => setStorage(stor)}
                      key={indx}
                      className={`border ${storage === stor ? "bg-[#276680] text-white" : ""
                        } text-xs p-2 cursor-pointer text-gray-500 lg:text-sm rounded`}
                    >
                      {stor}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-3 lg:mt-5">
              <h2 className="text-xs lg:text-sm  font-semibold uppercase mb-2">Status</h2>
              <p className="text-xs text-gray-500 lg:text-sm">{product?.inStock ? "In Stock" : "Stock Out"}</p>
            </div>

            <div className="flex mt-4 lg:mt-7 gap-2 sm:gap-4 justify-between">
              <div className="border  flex items-center text-lg justify-center">
                <Button className={"h-full  rounded-none"}><Plus /></Button>
                <span className=" px-2 lg:px-4">17</span>
                <Button className={"h-full rounded-none"} ><Minus /></Button>
              </div>
              <div className="w-full">
                <Button size={"lg"} className=" w-full ">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mt-4 items-center">
              <p className="text-sm md:text-base">Share This</p>
              <div className="flex gap-2">
                <Image
                  src={facebook}
                  alt="facebook icon"
                  width={25}
                  height={25}
                  quality={100}
                  className="cursor-pointer"
                />
                <Image
                  src={pinterest}
                  alt="pinterest icon"
                  width={25}
                  height={25}
                  quality={100}
                  className="cursor-pointer"
                />
                <Image
                  src={twitter}
                  alt="twitter icon"
                  width={25}
                  height={25}
                  quality={100}
                  className="cursor-pointer"
                />
              </div>
            </div>

          </div>
        </div>
      }

    </>
  );
};

export default ProductInfo;

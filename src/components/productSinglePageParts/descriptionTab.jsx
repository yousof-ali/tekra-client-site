"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import useSIngleProduct from "@/hook/useSingleProduct";
import useAxiosPublic from "@/hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

const DescriptionTabs = () => {
  const [isActive, setIsActive] = useState(1);
  const [reviewStar, setReviewStar] = useState(0);
  const [error, setError] = useState("");
  const [visibleReviews, setVisibleReviews] = useState(1);

  const { product, isLoading } = useSIngleProduct();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: reviews = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`reviews/${id}`);
      return res.data;
    },
  });

  const tabs = [
    { id: 1, label: "Description" },
    { id: 2, label: "Reviews" },
  ];

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (reviewStar < 1) {
      setError("Please select star !");
      return;
    }

    const productId = id;
    const userPhoto = "https://randomuser.me/api/portraits/women/32.jpg";
    const name = e.target.name.value;
    const country = e.target.country.value;
    const review = e.target.message.value;
    const rating = reviewStar;

    const newReview = { productId, userPhoto, name, country, review, rating };
    try {
      const res = await axiosPublic.post("/review", newReview);
      if (res.data.insertedId) {
        refetch();
        e.target.reset();
        setReviewStar(0);
        toast.success("Review submitted successfully!");
      }
    } catch (err) {
      toast.success(err.message);
    }
  };

  return (
    <div className="bg-gray-100 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-2 sm:gap-5">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setIsActive(tab.id)}
              className={`${
                isActive === tab.id && "!border-primary !text-black"
              } border-b border-transparent cursor-pointer px-2 lg:px-6 py-2 text-sm md:text-lg text-gray-500 transition`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        <div className="md:py-12 py-6 text-sm md:text-base text-gray-500">
          {isActive === 1 && (
            <div>
              <h3 className="text-xs sm:text-sm text-gray-800 mb-2 font-semibold uppercase ">
                Introduction
              </h3>
              <hr />
              <p className="text-xs mt-3 md:text-sm">
                {product?.fullDescription || "No description available."}
              </p>

              <h3 className="text-xs sm:text-sm mt-8 text-gray-800 font-semibold uppercase mb-2">
                Features :
              </h3>
              <hr />
              <ul className="list-disc mt-3 ml-6 text-xs md:text-sm space-y-1">
                {product?.featured?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {isActive === 2 && (
            <div>
              <h3 className="text-xs sm:text-sm  text-gray-800 font-semibold uppercase mb-2">
                Reviews
              </h3>
              <hr />
              <div className="space-y-3 mt-6">
                {reviews?.slice(0, visibleReviews)?.map((rev, i) => (
                  <div key={i} className="bg-white  rounded-md sm:p-10 p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src={rev?.userPhoto}
                          width={40}
                          height={40}
                          alt="avatar"
                          className="rounded-full w-6 sm:w-10"
                        />
                        <div>
                          <h4 className="text-gray-800 text-xs md:text-sm">
                            {rev.name}
                          </h4>
                          <p className="text-[10px] md:text-xs">
                            {rev.country}
                          </p>
                        </div>
                      </div>
                      <div>
                        {[...Array(Math.floor(rev.rating))].map((_, j) => (
                          <span
                            key={j}
                            className="text-yellow-500 sm:text-xl text-xs"
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-xs sm:text-sm">
                          ({rev.rating})
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs ml-12 sm:text-sm">
                      {rev?.review}
                    </p>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleReviews < reviews.length && (
                <div className="flex justify-center my-6 lg:my-16">
                  <Button
                    size="sm"
                    onClick={() => setVisibleReviews(reviews.length)}
                  >
                    Load More
                  </Button>
                </div>
              )}

              {/* Review Form */}
              <form onSubmit={handleReviewSubmit} className="mt-6  space-y-4">
                <h2 className="text-xs sm:text-sm mt-12 text-gray-800 font-semibold uppercase mb-2">
                  Write Your Review
                </h2>
                <hr />
                <div className="space-x-2">
                  {[...Array(5)].map((_, j) => (
                    <span
                      onClick={() => setReviewStar(j + 1)}
                      key={j}
                      className={`cursor-pointer text-2xl sm:text-3xl ${
                        reviewStar > j ? "text-yellow-400" : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                </div>
                <div className="flex flex-col  sm:flex-row sm:gap-3">
                  <div className="flex sm:w-1/2 w-full flex-col gap-1">
                    <label className="text-xs sm:text-sm" htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className=" border rounded-md bg-white p-3 lg:p-4 text-xs sm:text-sm "
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="flex sm:w-1/2 w-full flex-col sm:mt-0 mt-4 gap-1">
                    <label className="text-xs sm:text-sm" htmlFor="country">
                      Country *
                    </label>
                    <input
                      id="country"
                      name="country"
                      required
                      className=" border rounded-md bg-white p-3 lg:p-4 text-xs sm:text-sm "
                      placeholder="Country"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="text-xs sm:text-sm mb-1">Message *</label>
                  <textarea
                    rows={5}
                    name="message"
                    className="border rounded-md bg-white p-2 md:p-3 lg:p-4 outline-0"
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <input
                    type="submit"
                    value="Submit Review"
                    className="bg-black rounded-md text-white px-5 py-3 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionTabs;

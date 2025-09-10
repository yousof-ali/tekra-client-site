"use client";

const ProductCardThirdSkeleton = () => {
  return (
    <div className="bg-white rounded-md gap-2 items-center flex animate-pulse">
      {/* Image placeholder */}
      <div className="p-4">
        <div className="w-[70px] h-[70px] bg-gray-200 rounded-md" />
      </div>

      {/* Text placeholders */}
      <div className="flex flex-col gap-2">
        {/* Product name */}
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        {/* Price */}
        <div className="flex gap-2 items-center">
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardThirdSkeleton;

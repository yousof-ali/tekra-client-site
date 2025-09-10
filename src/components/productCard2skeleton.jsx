"use client";

const ProductCardSecondSkeleton = () => {
  return (
    <div className="bg-white group rounded-md shadow-xs items-center flex relative overflow-hidden animate-pulse">
      {/* Image Wrapper */}
      <div className="w-1/3 bg-gray-200">
        <div className="w-full h-[200px] bg-gray-200" />
      </div>

      {/* Details Section */}
      <div className="w-2/3 px-2 py-4 relative space-y-3">
        {/* Rating placeholder */}
        <div className="flex space-x-1">
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
        </div>

        {/* Product name placeholder */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price section */}
        <div className="flex space-x-2">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>

        {/* Button placeholder */}
        <div className="h-10 bg-gray-200 rounded-md w-28"></div>
      </div>

      {/* Hover icons placeholder */}
      <div className="absolute flex flex-col space-y-3 right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="p-2 bg-gray-200 rounded-md w-10 h-10"></div>
        <div className="p-2 bg-gray-200 rounded-md w-10 h-10"></div>
        <div className="p-2 bg-gray-200 rounded-md w-10 h-10"></div>
      </div>
    </div>
  );
};

export default ProductCardSecondSkeleton;

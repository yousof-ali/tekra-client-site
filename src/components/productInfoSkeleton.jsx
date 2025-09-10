"use client";

const ProductInfoSkeleton = () => {
  return (
    <div className="mx-4 flex flex-col my-8 gap-12 md:flex-row animate-pulse">
      {/* Left Column: Image + gallery */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="bg-gray-200 w-full h-72 lg:h-[400px] rounded-md" />
        <div className="flex gap-2 flex-wrap lg:gap-4">
          {Array(4)
            .fill(0)
            .map((_, indx) => (
              <div key={indx} className="bg-gray-200 w-16 h-16 sm:w-24 sm:h-24 rounded-md" />
            ))}
        </div>
      </div>

      {/* Right Column: Product info */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Category */}
        <div className="bg-gray-200 h-4 w-1/4 rounded"></div>

        {/* Name */}
        <div className="bg-gray-200 h-6 w-3/4 rounded"></div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-200 w-4 h-4 rounded"></div>
            ))}
        </div>

        {/* Price */}
        <div className="flex gap-2 items-center">
          <div className="bg-gray-200 h-4 w-16 rounded"></div>
          <div className="bg-gray-200 h-5 w-20 rounded"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <div className="bg-gray-200 h-3 w-full rounded"></div>
          <div className="bg-gray-200 h-3 w-5/6 rounded"></div>
          <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
        </div>

        {/* Color Options */}
        <div className="flex gap-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-200 w-7 h-7 rounded-full" />
            ))}
        </div>

        {/* Storage Options */}
        <div className="flex gap-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-200 w-10 h-6 rounded" />
            ))}
        </div>

        {/* Status */}
        <div className="bg-gray-200 h-3 w-1/4 rounded"></div>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-4">
          <div className="bg-gray-200 h-10 w-24 rounded"></div>
          <div className="bg-gray-200 h-10 w-full rounded"></div>
        </div>

        {/* Share Icons */}
        <div className="flex gap-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-200 w-6 h-6 rounded-full" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;

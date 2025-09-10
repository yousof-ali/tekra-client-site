import Image from "next/image";
import Link from "next/link";

const ProductCardThird = ({ product }) => {
  const {
    id,
    name,
    category,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    image,
    badge,
    inStock,
  } = product;
  return (
    <div className="bg-white hover:shadow-md  duration-500 rounded-md gap-2 items-center flex">
      <div className="p-4">
        <Image 
          src={image}
          width={70}
          height={70}
          quality={100}
          alt="product"
        />
      </div>
      <div>
        {/* Product Name */}

        <Link href={`/shop/${product?._id}`} className="text-gray-700 cursor-pointer duration-400 hover:text-[#276680] font-semibold text-sm md:text-base">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </Link>

        {/* Price Section */}
        <div className=" text-base md:text-lg">
          {originalPrice && (
            <span className="line-through text-gray-400 mr-2">
              ${originalPrice}
            </span>
          )}

          <span className="text-red-600 text-sm font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCardThird;

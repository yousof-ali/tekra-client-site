import Image from "next/image";

const SocialLogins = () => {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center my-5">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 text-sm">Continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          type="button"
          className="flex w-1/2 items-center justify-center cursor-pointer gap-2 border rounded-md p-3 hover:bg-gray-50 transition"
        >
          <Image
            alt="google"
            src="/google.png"
            width={24}
            height={24}
            quality={100}
          />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>

        <button
          type="button"
          className="flex w-1/2 items-center justify-center cursor-pointer gap-2 border rounded-md p-3 hover:bg-gray-50 transition"
        >
          <Image
            alt="facebook"
            src="/facebook.png"
            width={24}
            height={24}
            quality={100}
          />
          <span className="text-sm font-medium text-gray-700">Facebook</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;

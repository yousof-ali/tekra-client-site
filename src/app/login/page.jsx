"use client";

import SocialLogins from "@/components/socialLogins/socialLogins";
import useAuth from "@/hook/useAuth";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const {name} = useAuth();
  console.log(name)
  const [shwpass, setShowpass] = useState(false);
  return (
    <div className=" bg-white min-h-screen flex items-center justify-center">
      <div className="sm:w-[450px] lg:w-[500px] w-full py-8 md:px-8 lg:px-12 mx-4 lg:mx-0 px-6  rounded-md  ">
        <h2 className="text-xl font-semibold">Log In</h2>

        <form className="pt-6" action="">

          {/* email  */}
          <div className="lg:text-sm text-xs flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-600">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              className="outline-0 border rounded-md p-3"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          {/* password  */}
          <div className="lg:text-sm text-xs flex relative flex-col lg:mt-5 gap-1 mt-4">
            <label htmlFor="password" className="text-gray-600">
              Password*
            </label>
            <input
              id="password"
              type={shwpass ? "text" : "password"}
              className="outline-0 border rounded-md p-3"
              placeholder="Password"
              name="password"
              required
            />
            <div
              onClick={() => setShowpass(!shwpass)}
              className="absolute right-3 lg:top-9 top-7 cursor-pointer"
            >
              {shwpass ? (
                <EyeOff className="text-gray-600" />
              ) : (
                <Eye className="text-gray-600" />
              )}
            </div>
          </div>

          
          <div className="mt-1">
            <button className="text-xs cursor-ponter lg:text-sm underline" variant={'link'}>Forgot Password</button>
          </div>
          
          <div className="mt-5">
            <input
              type="submit"
              value={"Log In"}
              className="bg-primary cursor-pointer text-white rounded-md w-full py-3"
            />
          </div>
        </form>
        <SocialLogins/>
        <div className="mt-4 flex  text-xs lg:text-sm  text-gray-500  gap-2">
          <p className="text-gray-400 ">Create an account?</p>
          <Link className="text-black underline" href={"/register"}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

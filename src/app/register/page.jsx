"use client";

import LoadingSpinner from "@/components/loadingSpinner";
import SocialLogins from "@/components/socialLogins/socialLogins";
import useAuth from "@/hook/useAuth";
import { updateProfile } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [shwpass, setShowpass] = useState(false);
  const [shwConfirmpass, setShowconfirmpass] = useState(false);
  const [error, setError] = useState("");
  const { createUser } = useAuth();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setButtonLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.cpassword.value;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      setButtonLoading(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase, one lowercase, and one special character."
      );
      setButtonLoading(false);
      return;
    }

    if (password !== confirmPass) {
      setError("Password not matching!");
      setButtonLoading(false);
      return;
    }

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          updateProfile(res.user, {
            displayName: name,
          }).then((_) => {
            setButtonLoading(false);
            toast.success("Account create successfully");
            router.push("/")
          });
        }
      })
      .catch((err) => {
        setError(err.message);
        setButtonLoading(false);
      });
  };

  return (
    <div className=" bg-white min-h-screen flex items-center justify-center">
      <div className="sm:w-[450px] lg:w-[500px] w-full py-8 md:px-8 lg:px-12 mx-4 lg:mx-0 px-6  rounded-md  ">
        <h2 className="text-xl font-semibold">Create Account</h2>

        <form className="pt-6" onSubmit={handleSubmit}>
          {/* name  */}
          <div className="lg:text-sm text-xs flex flex-col gap-1 ">
            <label htmlFor="name" className="text-gray-600">
              Full Name*
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="outline-0 border rounded-md p-3"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* email  */}
          <div className="lg:text-sm text-xs flex flex-col lg:mt-5 gap-1 mt-4">
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

          {/* confirm password  */}
          <div className="lg:text-sm relative text-xs flex flex-col gap-1 lg:mt-5 mt-4">
            <label htmlFor="email" className="text-gray-600">
              Confirm Password*
            </label>
            <input
              id="cpassword"
              type={shwConfirmpass ? "text" : "password"}
              name="cpassword"
              className="outline-0 border rounded-md p-3"
              placeholder="Confirm password"
              required
            />
            <div
              onClick={() => setShowconfirmpass(!shwConfirmpass)}
              className="absolute right-3 top-7 lg:top-9 cursor-pointer"
            >
              {shwConfirmpass ? (
                <EyeOff className="text-gray-600" />
              ) : (
                <Eye className="text-gray-600" />
              )}
            </div>
          </div>

          <div className="my-5 text-gray-500  text-xs lg:text-sm flex items-center gap-2">
            <input id="term" type="checkbox" required />
            <label htmlFor="term ">
              I agree all terms and condition TEKRA.
            </label>
          </div>

          {error && <p className="text-xs mb-2 text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={buttonLoading}
              className="bg-primary cursor-pointer text-white rounded-md w-full py-3 flex justify-center items-center gap-2 disabled:opacity-80"
            >
              {buttonLoading ? (
                <>
                  <LoadingSpinner /> Creating
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>
        <SocialLogins />
        <div className="mt-4 flex  text-xs lg:text-sm  text-gray-500  gap-2">
          <p className="text-gray-400 ">Already have an Account?</p>
          <Link className="text-black underline" href={"/login"}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

"use client";

import SocialLogins from "@/components/socialLogins/socialLogins";
import { Button } from "@/components/ui/button";
import useAuth from "@/hook/useAuth";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Login = () => {
  const [shwpass, setShowpass] = useState(false);
  const [error, setError] = useState("");
  const { loginEmail } = useAuth();
  const emailRef = useRef();
  const [rerror, setRerror] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmail(email, password)
      .then((res) => {
        if (res.user) {
          console.log(res.user);
          toast.success("Login Successfully!");
        }
      })
      .catch((_) => {
        setError("Invalid email or password");
      });
  };

  const handleForgotPassword = () => {
    setRerror("");
    const email = emailRef.current.value;

    console.log(email);

    if (email.length < 1) {
      setRerror("Email field is empty!");
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      setRerror("Enter a valid email!");
      return;
    }

    
  };

  return (
    <div className=" bg-white min-h-screen flex items-center justify-center">
      <div className="sm:w-[450px] lg:w-[500px] w-full py-8 md:px-8 lg:px-12 mx-4 lg:mx-0 px-6  rounded-md  ">
        <h2 className="text-xl font-semibold">Log In</h2>

        <form className="pt-6" onSubmit={handleLogin}>
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

          <div className="flex justify-end my-4">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-xs cursor-pointer lg:text-sm underline"
                >
                  Forgot Password?
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Reset Password</DialogTitle>
                  <DialogDescription>
                    Do you want to reset your password?
                  </DialogDescription>
                </DialogHeader>
                <div className="lg:text-sm text-xs flex flex-col gap-1">
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    className="outline-0 border rounded-md p-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {rerror && (
                  <p className="text-xs text-red-600">{rerror}</p>
                )}
                {
                  !rerror && emailRef.current?.value && (
                  <p className="text-xs flex items-center gap-2">
                    Check{" "}
                    <span className="text-primary flex items-center gap-1">
                      <Mail className="w-4"/> {emailRef.current?.value}
                    </span>
                  </p>
                )
                }

                <DialogFooter className="sm:justify-start">
                  <div  className="flex justify-end gap-2 w-full">
                    <DialogClose asChild>
                    <Button variant={"secondary"} type="button">
                      Close
                    </Button>
                  </DialogClose>
                  <Button onClick={handleForgotPassword}>Send </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <div className="mt-3">
            <input
              type="submit"
              value={"Log In"}
              className="bg-primary cursor-pointer text-white rounded-md w-full py-3"
            />
          </div>
        </form>
        <SocialLogins />
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

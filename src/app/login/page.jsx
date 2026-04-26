import Container from "@/components/Container/Container";
import React from "react";
import { MdOutlineChildCare } from "react-icons/md";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { PiLockKey } from "react-icons/pi";
import LoginButton from "@/components/Button/LoginButton";

const Login = () => {
  return (
    <div className="bg-[#e6f3f3] min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* left side */}
          <div className="flex-1 bg-[#0B4665] p-6 sm:p-8 lg:p-10 rounded-2xl hidden lg:block">
            <div className="flex items-center gap-1">
              <MdOutlineChildCare className="text-white" size={45} />
              <p className="font-bold text-3xl text-white">Care</p>
            </div>

            <h2 className="mt-8 lg:mt-10 font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Your sanctuary for compassionate care.
            </h2>

            <p className="mt-4 lg:mt-5 font-medium text-lg sm:text-xl lg:text-2xl text-[#C9E6FF]">
              Designed to bridge the gap between technology and human
              empathy.Step back into your peaceful caregiving journey.
            </p>

            <div className="bg-[#2C5E7E] rounded-xl mt-5 border border-[#C1C7CE]">
              <div className="p-5">
                <p className="font-medium text-lg sm:text-xl italic text-[#C9E6FF]">
                  The care my mother receives through this platform has been
                  transformative. It feels human, not just digital.
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src="/assets/login.jpg"
                    alt="logFav"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-lg sm:text-xl text-white">
                      Eleanor Vance
                    </h2>
                    <p className="font-normal text-sm sm:text-lg text-[#C9E6FF]">
                      Family Caregiver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="flex-1 w-full">
            <div className="mt-7">
              {/* mobile logo */}
              <div className="flex justify-center items-center gap-1 lg:hidden">
                <MdOutlineChildCare className="text-[#0B4665]" size={45} />
                <p className="font-bold text-3xl text-[#0B4665]">Care</p>
              </div>

              <h2 className="font-extrabold text-3xl sm:text-3xl lg:text-5xl py-3 text-center lg:text-left">
                Welcome back
              </h2>

              <p className="font-normal text-lg px-1 sm:text-xl lg:text-2xl mt-3 text-center lg:text-left">
                Please enter your details to access your dashboard
              </p>
            </div>

            <div className="px-5">
              {/* email */}
              <div>
                <form>
                  <div className="mt-9">
                    <div className="flex items-center gap-2">
                      <MdOutlineMail size={20} />
                      <p className="font-medium text-lg sm:text-xl">
                        Email Address
                      </p>
                    </div>

                    <div className="mt-3">
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="border-b-2 border-gray-300 outline-none focus:border-[#0B4665] pb-2 w-full"
                      />
                    </div>
                  </div>

                  {/* password */}
                  <div>
                    <div className="flex justify-between items-center mt-9">
                      <div className="flex items-center gap-2">
                        <PiLockKey size={20} />
                        <p className="font-medium text-lg sm:text-xl">
                          Password
                        </p>
                      </div>

                      <Link href="#">
                        <p className="font-normal border-b-2 border-[#0B4665] text-sm sm:text-lg text-[#0B4665]">
                          Forgot Password?
                        </p>
                      </Link>
                    </div>

                    <div className="mt-3">
                      <input
                        type="password"
                        placeholder="Your Password"
                        className="border-b-2 border-gray-300 outline-none focus:border-[#0B4665] pb-2 w-full"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* button */}
              <div className="bg-[#0B4665] text-center rounded-2xl mt-12">
                <LoginButton></LoginButton>
              </div>

              {/* divider */}
              <div className="flex items-center mt-12 gap-2">
                <div className="border border-gray-300 flex-1"></div>
                <span className="font-normal text-sm sm:text-lg text-center whitespace-nowrap">
                  OR SIGN IN WITH
                </span>
                <div className="border border-gray-300 flex-1"></div>
              </div>

              {/* google */}
              <div className="flex justify-center items-center py-5">
                <button className="btn bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>

              <p className="text-center text-base sm:text-xl font-normal pb-9">
                Don&apos;t have an account?{" "}
                <Link className="text-[#0B4665]" href="register">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

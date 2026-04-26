import Container from "@/components/Container/Container";
import Link from "next/link";
import React from "react";
import { CgAppleWatch } from "react-icons/cg";

const Register = () => {
  return (
    <div className="bg-[#e6f3f3] min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">

          {/* LEFT SIDE */}
          <div className="bg-[#0B4665] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-between">

            <div className="flex flex-col items-center text-center">
              <CgAppleWatch className="text-[#d0e8fb] mt-20 flex justify-center items-center" size={250} />

              <h2 className="text-2xl sm:text-3xl font-bold">
                Step into a community built on trust.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-200">
                Join over 10,000 families finding peace of mind with our curated care network.
              </p>
            </div>

            {/* avatars */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="avatar-group -space-x-4">
                {[
                  "batperson",
                  "spiderperson",
                  "averagebulk",
                  "wonderperson",
                ].map((name, i) => (
                  <div key={i} className="avatar">
                    <div className="w-10 sm:w-12 rounded-full">
                      <img
                        src={`https://img.daisyui.com/images/profile/demo/${name}@192.webp`}
                        alt="avatar"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-300">
                Trusted by caregivers worldwide
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Join Our Caring Community
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Create your account to start your journey with Care.IO.
              </p>
            </div>

            {/* Google Button */}
            <div className="mt-6">
              <button className="btn w-full bg-white text-black border hover:bg-gray-100">
                {/* google icon */}
                <svg width="18" height="18" viewBox="0 0 512 512">
                  <path fill="#fff" d="M0 0H512V512H0" />
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-8 gap-3">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                OR CONTINUE WITH EMAIL
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {[
                { label: "Full Name", type: "text", placeholder: "Your Name" },
                { label: "Email Address", type: "email", placeholder: "Your Email" },
                { label: "Phone Number", type: "tel", placeholder: "Your Number" },
                { label: "Password", type: "password", placeholder: "Your Password" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-sm text-gray-600">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-b-2 border-gray-300 focus:border-[#0B4665] outline-none py-2"
                  />
                </div>
              ))}

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#0B4665] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#08344b] transition"
              >
                Create Account
              </button>
            </form>

            {/* login */}
            <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0B4665] font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
"use client"
import React from "react";
import { signIn } from "next-auth/react"


const LoginButton = () => {
  return (
    <div>
      <button onClick={() => signIn()} className="text-white font-semibold text-lg sm:text-xl py-3 w-full">
        Sign In
      </button>
    </div>
  );
};

export default LoginButton;

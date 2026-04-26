import Link from "next/link";
import React from "react";
import { MdOutlineChildCare } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex col-1 justify-center items-center gap-1">
      <MdOutlineChildCare className="text-[#0B4665]" size={45} />
      <p className="font-bold text-3xl text-[#0B4665]">Care</p>
    </div>
  );
};

export default Logo;

import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import Logo from "../Logo/Logo";
import NavLink from "../Button/NavLink";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
     const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink href={"/history"}>History</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#f0f8f5]">
      <Container>
        <div className="navbar py-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
               {nav}
              </ul>
            </div>
            {/* logo */}
            <Link href={"/"}>
            <Logo></Logo>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* menu */}
              {nav}
            </ul>
          </div>
          <div className="navbar-end">
            <Link href={"/login"}>
                <Avatar></Avatar>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Baking Class", path: "/services" },
    { label: "Teams", path: "/teams" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full mx-auto px-4 bg-white/50 shadow fixed top-0 z-50 sm:px-20 backdrop-blur-2xl transition-colors ">
      <div className="justify-between md:items-center md:flex items-center py-3">
        <div>
          <div className="flex items-center justify-between py-3">
            <Logo />
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex xl:px-20 md:space-x-6 md:space-y-0 ">
              {navigation.map((link) => (
                <NavLink item={link} key={link.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

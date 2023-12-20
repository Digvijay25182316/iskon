import React, { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import {
  MdOutlineDashboard,
  MdOutlineEventAvailable,
  MdOutlineMenu,
} from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Slider = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSlider = () => {
    setSliderOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className={`rounded-md focus:outline-none md:hidden p-2 border text-xl bg-white`}
        onClick={toggleSlider}
      >
        <MdOutlineMenu size={20} />
      </button>
      <div
        className={
          isSliderOpen
            ? "absolute top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50 h-screen"
            : ""
        }
      >
        <aside
          className={`fixed top-0 left-0 h-full sm:w-2/5 w-4/5 shadow bg-white text-white p-4 transition-transform z-[1000] ${
            isSliderOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } transition-transform duration-300 ease-in-out backdrop-brightness-50`}
        >
          <button
            className="absolute top-4 right-4 text-gray-700 focus:outline-none border-2 border-purple-400 p-2 rounded-full text-xl"
            onClick={toggleSlider}
          >
            <RxCross2 />
          </button>
          <div className="flex flex-col items-center py-5 gap-5 mt-10">
            <Link to={"/admin/dashboard"} onClick={toggleSlider}>
              <button
                className={`text-xl flex items-center gap-6 font-bold border-2 ${
                  pathname === "/admin/dashboard"
                    ? "border-purple-400 text-purple-400"
                    : "border-stone-400 text-stone-400"
                } p-2 rounded-xl w-[250px]`}
              >
                <MdOutlineDashboard className="text-3xl" />
                <p>Dashboard</p>
              </button>
            </Link>
            <Link to={"/admin/users"} onClick={toggleSlider}>
              <button
                className={`text-xl flex items-center gap-6 font-bold border-2 ${
                  pathname === "/admin/users"
                    ? "border-purple-400 text-purple-400"
                    : "border-stone-400 text-stone-400"
                } p-2 rounded-xl flex items-center w-[250px]`}
              >
                <HiOutlineUsers className="text-3xl" />
                <p>Users</p>
              </button>
            </Link>
            <Link to={"/admin/events"} onClick={toggleSlider}>
              <button
                className={`text-xl flex items-center gap-6 font-bold border-2 ${
                  pathname === "/admin/events"
                    ? "border-purple-400 text-purple-400"
                    : "border-stone-400 text-stone-400"
                } p-3 rounded-xl flex items-center w-[250px]`}
              >
                <MdOutlineEventAvailable className="text-3xl" />
                <p>Events</p>
              </button>
            </Link>
            <Link to={"/admin/programs"} onClick={toggleSlider}>
              <button
                className={`text-xl flex items-center gap-6 font-bold border-2 ${
                  pathname === "/admin/programs"
                    ? "border-purple-400 text-purple-400"
                    : "border-stone-400 text-stone-400"
                } p-3 rounded-xl flex items-center w-[250px]`}
              >
                <PiGraduationCap className="text-3xl text-stone-400" />
                <p>Programs</p>
              </button>
            </Link>
            <Link to={"/admin/programs"} onClick={toggleSlider}>
              <button
                className={`text-xl flex items-center gap-6 font-bold border-2 ${
                  pathname === "/admin/programs"
                    ? "border-purple-400 text-purple-400"
                    : "border-stone-400 text-stone-400"
                } p-3 rounded-xl flex items-center w-[250px]`}
              >
                <BsCurrencyRupee className="text-3xl text-stone-400" />
                <p>Donations</p>
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Slider;

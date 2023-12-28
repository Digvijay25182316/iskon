import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import SliderMenu from "../components/SliderMenu";
import SearchBox from "./SearchBox";
import { BsCurrencyRupee } from "react-icons/bs";
import { TbActivity } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={pathname.startsWith("/admin") ? "block md:w-20" : "hidden"}>
      <div className="bg-stone-100 fixed top-0 left-0 right-0 md:hidden px-2 py-2 flex flex-col gap-3 border-b rounded-b-2xl shadow z-[2000]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <SliderMenu />
            <p className="text-xl font-bold text-gray-700">Sanjeevani</p>
          </div>
          <div className="text-2xl bg-white p-2 rounded-full border drop-shadow-sm">
            <FaUser />
          </div>
        </div>
        <SearchBox />
      </div>
      <aside className="fixed p-4 md:flex flex-col items-center min-h-screen hidden w-20 bg-stone-100 gap-8">
        <div className="text-2xl bg-white p-3 rounded-full border shadow">
          <FaUser />
        </div>
        <div className="flex items-center flex-col gap-5">
          <Link to={"/admin/dashboard"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/dashboard"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <MdOutlineDashboard />
            </div>
          </Link>
          <Link to={"/admin/users"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/users"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <HiOutlineUsers />
            </div>
          </Link>
          <Link to={"/admin/events"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/events"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <TbActivity />
            </div>
          </Link>
          <Link to={"/admin/programs"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/programs"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <MdOutlineEventAvailable />
            </div>
          </Link>
          <Link to={"/admin/courses"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/courses"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <PiGraduationCap />
            </div>
          </Link>
          <Link to={"/admin/participants"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/participants"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <HiOutlineUserGroup />
            </div>
          </Link>
          <Link to={"/admin/donations"}>
            <div
              className={`text-2xl ${
                pathname === "/admin/donations"
                  ? " text-lime-500 bg-stone-700 p-1 rounded-full border-2 border-lime-500 shadow"
                  : " text-stone-400 p-1 transition-colors duration-300 hover:bg-stone-200 hover:rounded-full"
              }`}
            >
              <BsCurrencyRupee />
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Header;

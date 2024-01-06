import React from "react";
import {
  ChartPieIcon,
  CalendarIcon,
  AcademicCapIcon,
  BoltIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
  UserIcon,
  PlusCircleIcon,
  UserPlusIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import SliderMenu from "../components/SliderMenu";
import SearchBox from "./SearchBox";
import { useMyContext } from "../context/Store";
import { Cookies } from "react-cookie";

const Header = () => {
  const { pathname } = useLocation();
  const { state } = useMyContext();

  return (
    <div className={pathname.startsWith("/admin") ? "block md:w-20" : "hidden"}>
      <div className="fixed top-0 left-0 right-0 md:hidden px-2 py-2 backdrop-blur-lg z-[2000] drop-shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <SliderMenu />
            <Link to={"/"}>
              <p className="text-xl font-bold text-gray-700">Sanjeevani</p>
            </Link>
          </div>
          <div className="text-2xl bg-purple-100 p-2 rounded-full drop-shadow-sm text-purple-600 ">
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <aside className="fixed md:flex flex-col items-center min-h-screen hidden w-[16vw]">
        <div className="md:fixed md:flex flex-col px-3 bg-white min-w-56 rounded-r-lg min-h-screen justify-between hidden">
          <div>
            <Link to={"/"}>
              <p className="text-xl font-bold text-gray-700 p-3 pb-3">
                Sanjeevani
              </p>
            </Link>
            <p className="text-sm font-semibold text-gray-400 pb-1">Pages</p>
            <Link to={"/admin/dashboard"}>
              <div
                className={`font-semibold  ${
                  pathname === "/admin/dashboard"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1 px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <ChartPieIcon className="h-6 w-6" />
                DashBoard
              </div>
            </Link>
            <Link
              to={"/admin/volunteers"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/volunteers"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <UserIcon className="h-6 w-6" />
                Volunteers
              </div>
            </Link>
            <Link
              to={"/admin/programs"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/programs"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <CalendarIcon className="h-6 w-6" />
                Programs
              </div>
            </Link>
            <Link
              to={"/admin/activities"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/activities"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <BoltIcon className="h-6 w-6" />
                Activities
              </div>
            </Link>
            <Link to={"/admin/courses"}>
              <div
                className={`font-semibold ${
                  pathname === "/admin/courses"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <AcademicCapIcon className="h-6 w-6" />
                Courses
              </div>
            </Link>
            <Link
              to={"/admin/participants"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/participants"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <UserGroupIcon className="h-6 w-6" />
                Participants
              </div>
            </Link>
            {/* this is the dinamic header link for courseDetails */}
            <Link
              to={`/admin/courses/levels/${state?.code?.code}`}
              hidden={!pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === `/admin/courses/levels/${state?.code?.code}`
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <ArrowTrendingUpIcon className="h-6 w-6" />
                Levels
              </div>
            </Link>
            {/* this is the dinamic header link for courseDetails */}
            <Link
              to={`/admin/courses/sessions/${state?.code?.code}`}
              hidden={!pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === `/admin/courses/sessions/${state?.code?.code}`
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <ClockIcon className="h-6 w-6" />
                Sessions
              </div>
            </Link>
            <Link
              to={"/admin/donations"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/donations"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <CurrencyRupeeIcon className="h-6 w-6" />
                Donations
              </div>
            </Link>
            <p className="text-sm font-semibold text-gray-400 pb-1">
              Controllers
            </p>
            <Link
              to={"/admin/addprogram"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/addprogram"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <PlusIcon className="h-6 w-6" />
                Add Program
              </div>
            </Link>
            {/* this is the dinamic header link for courseDetails */}
            <Link
              to={`/admin/courses/addlevel/${state?.code?.code}`}
              hidden={!pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === `/admin/courses/addlevel/${state?.code?.code}`
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <PlusIcon className="h-6 w-6" />
                Add Levels
              </div>
            </Link>
            {/* this is the dinamic header link for courseDetails */}
            <Link
              to={`/admin/courses/addsessions/${state?.code?.code}`}
              hidden={!pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === `/admin/courses/addsessions/${state?.code?.code}`
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <PlusCircleIcon className="h-6 w-6" />
                Add Sessions
              </div>
            </Link>
            <Link
              to={"/admin/addcourse"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/addcourse"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <PlusCircleIcon className="h-6 w-6" />
                Add Course
              </div>
            </Link>
            <Link
              to={"/admin/addvolunteer"}
              hidden={pathname.startsWith("/admin/courses/")}
            >
              <div
                className={`font-semibold ${
                  pathname === "/admin/addvolunteer"
                    ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                    : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
              >
                <UserPlusIcon className="h-6 w-6" />
                Add Volunteer
              </div>
            </Link>
          </div>
          <button
            className="font-semibold text-white bg-cyan-700 hover:bg-cyan-800  m-1  px-4 py-1.5 rounded-lg flex items-center gap-5"
            onClick={() => window.alert("you clicked logout")}
          >
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Header;

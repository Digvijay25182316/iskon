import React, { useState } from "react";
import {
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
  BoltIcon,
  CalendarIcon,
  ChartPieIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  PlusCircleIcon,
  PlusIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../context/Store";

const Slider = () => {
  const { state } = useMyContext();
  const [isSliderOpen, setSliderOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSlider = () => {
    setSliderOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className={`rounded-full focus:outline-none md:hidden p-2 bg-purple-500 text-white`}
        onClick={toggleSlider}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div
        className={
          isSliderOpen
            ? "absolute top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50 h-screen"
            : ""
        }
      >
        <aside
          className={`fixed top-0 left-0 h-full sm:w-2/5 w-4/5 shadow-lg bg-white text-white p-4 transition-transform z-[2000] ${
            isSliderOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } transition-transform duration-300 ease-in-out backdrop-brightness-50`}
        >
          <button
            className="absolute top-4 right-4 text-gray-700 bg-gray-100 focus:outline-none hover:bg-purple-100 p-2 rounded-full text-xl"
            onClick={toggleSlider}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="flex flex-col px-3 bg-white min-w-full rounded-r-lg min-h-screen justify-between md:hidden">
            <div className="w-full">
              <p className="text-xl font-bold text-gray-700 p-3 pb-3">
                Sanjeevani
              </p>
              <p className="text-sm font-semibold text-gray-400 pb-1">Pages</p>
              <Link to={"/admin/dashboard"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/dashboard"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <ChartPieIcon className="h-6 w-6" />
                  DashBoard
                </button>
              </Link>
              <Link
                to={"/admin/volunteers"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/volunteers"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserIcon className="h-6 w-6" />
                  Volunteers
                </button>
              </Link>
              <Link
                to={"/admin/programs"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/programs"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <CalendarIcon className="h-6 w-6" />
                  Programs
                </button>
              </Link>
              <Link
                to={"/admin/activities"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/activities"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <BoltIcon className="h-6 w-6" />
                  Activities
                </button>
              </Link>
              <Link to={"/admin/courses"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/courses"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <AcademicCapIcon className="h-6 w-6" />
                  Courses
                </button>
              </Link>
              <Link
                to={"/admin/participants"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/participants"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserGroupIcon className="h-6 w-6" />
                  Participants
                </button>
              </Link>
              {/* this is the dinamic header link for courseDetails */}
              <Link
                to={`/admin/courses/levels/${state?.code?.code}`}
                hidden={!pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === `/admin/courses/levels/${state?.code?.code}`
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <ArrowTrendingUpIcon className="h-6 w-6" />
                  Levels
                </button>
              </Link>
              {/* this is the dinamic header link for courseDetails */}
              <Link
                to={`/admin/courses/sessions/${state?.code?.code}`}
                hidden={!pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === `/admin/courses/sessions/${state?.code?.code}`
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <ClockIcon className="h-6 w-6" />
                  Sessions
                </button>
              </Link>
              <Link
                to={"/admin/donations"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/donations"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <CurrencyRupeeIcon className="h-6 w-6" />
                  Donations
                </button>
              </Link>
              <p className="text-sm font-semibold text-gray-400 pb-1">
                Controllers
              </p>
              <Link
                to={"/admin/addprogram"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/addprogram"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusIcon className="h-6 w-6" />
                  Add Program
                </button>
              </Link>
              {/* this is the dinamic header link for courseDetails */}
              <Link
                to={`/admin/courses/addlevel/${state?.code?.code}`}
                hidden={!pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === `/admin/courses/addlevel/${state?.code?.code}`
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusIcon className="h-6 w-6" />
                  Add Levels
                </button>
              </Link>
              {/* this is the dinamic header link for courseDetails */}
              <Link
                to={`/admin/courses/addsessions/${state?.code?.code}`}
                hidden={!pathname.startsWith("/admin/courses/")}
              >
                <div
                  cbutton
                  onClick={toggleSlider}
                  sName={`font-semibold ${
                    pathname ===
                    `/admin/courses/addsessions/${state?.code?.code}`
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusCircleIcon className="h-6 w-6" />
                  Add Sessions
                </div>
              </Link>
              <Link
                to={"/admin/addcourse"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/addcourse"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusCircleIcon className="h-6 w-6" />
                  Add Course
                </button>
              </Link>
              <Link
                to={"/admin/addvolunteer"}
                hidden={pathname.startsWith("/admin/courses/")}
              >
                <button
                  onClick={toggleSlider}
                  className={`font-semibold w-full ${
                    pathname === "/admin/addvolunteer"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserPlusIcon className="h-6 w-6" />
                  Add Volunteer
                </button>
              </Link>
            </div>
            <button
              className="font-semibold text-white bg-cyan-700 hover:bg-cyan-800  m-10  px-4 py-1.5 rounded-lg flex items-center gap-5"
              onClick={() => window.alert("you clicked logout")}
            >
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Slider;

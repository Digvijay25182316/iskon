import React, { useState } from "react";
import courses from "../../data/Courses";
import SearchBox from "../../components/SearchBox";
import { FaGraduationCap } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import AddCourses from "./AddCourses";
import UpdateCourse from "./UpdateCourse.jsx";

function Courses() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [isModalOpenUpdate, setModalOpenUpdate] = useState(false);
  const [isSliderOpenUpdate, setSliderOpenUpdate] = useState(false);
  return (
    <div className="w-full mt-32 md:mt-0 md:p-5 p-3">
      <div className="md:flex items-center justify-between w-full hidden">
        <p className="text-2xl font-bold text-gray-700">Courses</p>
        <div>
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 pb-5 ml-10">
        Courses
      </p>
      <button
        className="bg-blue-700 px-5 mt-5 py-2 text-lg text-white rounded-md ml-10 md:ml-0"
        onClick={() => {
          setModalOpen(!isModalOpen);
          setSliderOpen(!isSliderOpen);
        }}
      >
        + Courses
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 mt-5">
        {courses?.map((course, index) => (
          <div
            className="bg-white p-3 min-h-[150px] rounded-xl shadow"
            key={index}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-5">
                <p className="bg-blue-100 w-max p-3 rounded-full ">
                  <FaGraduationCap className="text-xl" />
                </p>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-gray-700">{course.name}</p>
                  <p className="flex items-center justify-center text-sm text-gray-500 font-bold">
                    {course.createdby}
                  </p>
                </div>
              </div>
              <div className="flex items-start text-blue-700 gap-5">
                <button
                  className="bg-gray-200 p-2 rounded-lg hover:bg-red-200 cursor-pointer"
                  onClick={() => {
                    setModalOpenUpdate(!isModalOpenUpdate);
                    setSliderOpenUpdate(!isSliderOpenUpdate);
                  }}
                >
                  <MdEdit />
                </button>
                <p className="bg-gray-200 p-2 rounded-lg hover:bg-red-200 cursor-pointer">
                  <FaRegEye />
                </p>
              </div>
            </div>
            <div className="font-semibold text-gray-500 text-sm ">
              {course.description}
            </div>
          </div>
        ))}
      </div>
      <AddCourses
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        isAddCoursesOpen={isSliderOpen}
        setAddCoursesOpen={setSliderOpen}
      />
      <UpdateCourse
        isModalOpen={isModalOpenUpdate}
        setModalOpen={setModalOpenUpdate}
        isAddCoursesOpen={isSliderOpenUpdate}
        setAddCoursesOpen={setSliderOpenUpdate}
      />
    </div>
  );
}

export default Courses;

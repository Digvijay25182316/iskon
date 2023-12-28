import React, { useRef } from "react";

import "react-datepicker/dist/react-datepicker.module.css";

import { RxCross2 } from "react-icons/rx";
import SubmitButtonForms from "../../components/SubmitFormButton";

const AddCourses = ({ isAddCoursesOpen, setAddCoursesOpen }) => {
  const formRef = useRef();
  const toggleAddCourses = () => {
    setAddCoursesOpen((prev) => console.log(!prev));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current.name);
  };

  return (
    <>
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-white text-black transition-transform z-[2000] ${
          isAddCoursesOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-brightness-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 focus:outline-none border-2 border-purple-400 p-2 rounded-full text-xl z-[2300]"
          type="button"
          onClick={toggleAddCourses}
        >
          <RxCross2 />
        </button>
        <div className="overflow-scroll scroll-hidden h-full flex flex-col">
          <p className="fixed text-gray-800 font-bold text-xl  bg-white w-full p-4">
            Add Course
          </p>
          <div className="h-full flex justify-center w-full">
            <form
              className="flex flex-col gap-10 pt-32 md:w-3/5 w-4/5"
              ref={formRef}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-gray-700">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="px-4 py-1.5 text-lg border rounded-md outline-none w-full"
                  placeholder="Enter course name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="font-bold text-gray-700"
                >
                  description
                </label>
                <input
                  type="text"
                  name="name"
                  className="px-4 py-1.5 text-lg border rounded-md outline-none"
                  placeholder="Enter Course Description"
                />
              </div>

              <SubmitButtonForms
                buttonStyles={
                  "px-5 py-2 text-lg bg-blue-200 w-full rounded-lg "
                }
                content={"Create"}
                containerStyles={"pb-10"}
              />
            </form>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AddCourses;

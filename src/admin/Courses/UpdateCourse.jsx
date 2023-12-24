import React, { useRef } from "react";

import { RxCross2 } from "react-icons/rx";
import SubmitButtonForms from "../../components/SubmitFormButton";

const AddCourses = ({
  isModalOpen,
  setModalOpen,
  isAddCoursesOpen,
  setAddCoursesOpen,
}) => {
  const formRef = useRef();
  const toggleAddCourses = () => {
    setAddCoursesOpen((prev) => console.log(!prev));
    setModalOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current.name);
  };

  return (
    <>
      <div
        className={
          isAddCoursesOpen || isModalOpen
            ? "fixed top-0 left-0 right-0 bottom-0 z-[1000] backdrop-brightness-50 h-screen"
            : ""
        }
        onClick={() => {
          setAddCoursesOpen(false);
          setModalOpen(false);
        }}
      ></div>
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-3/5 shadow bg-white text-black transition-transform z-[2000] ${
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
            Update Course
          </p>
          <div className="h-full flex  justify-center">
            <form
              className="flex flex-col gap-10 pt-20"
              ref={formRef}
              onSubmit={onSubmit}
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                This Form Will be basically to update
              </div>
              <SubmitButtonForms
                buttonStyles={
                  "px-5 py-2 text-lg bg-blue-200 w-full rounded-lg "
                }
                content={"Update"}
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

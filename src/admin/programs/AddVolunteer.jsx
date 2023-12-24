import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { SlCalender } from "react-icons/sl";

import { RxCross2 } from "react-icons/rx";
import SubmitButtonForms from "../../components/SubmitFormButton";

const AddVolunteer = ({
  isModalOpen,
  setModalOpen,
  isSliderOpen,
  setSliderOpen,
}) => {
  const formRef = useRef();
  const toggleSlider = () => {
    setSliderOpen((prev) => console.log(!prev));
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
          isSliderOpen || isModalOpen
            ? "fixed top-0 left-0 right-0 bottom-0 z-[1000] backdrop-brightness-50 h-screen"
            : ""
        }
        onClick={() => {
          setSliderOpen(false);
          setModalOpen(false);
        }}
      ></div>
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-3/5 shadow bg-white text-black transition-transform z-[2000] ${
          isSliderOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-brightness-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 focus:outline-none border-2 border-purple-400 p-2 rounded-full text-xl z-[2300]"
          type="button"
          onClick={toggleSlider}
        >
          <RxCross2 />
        </button>
        <div className="overflow-scroll scroll-hidden h-full flex flex-col">
          <p className="fixed text-gray-800 font-bold text-xl  bg-white w-full p-4">
            Register Volunteer
          </p>
          <div className="h-full flex  justify-center">
            <form
              className="flex flex-col gap-10 pt-20"
              ref={formRef}
              onSubmit={onSubmit}
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-3">
                  <label
                    className="font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter your First Name"
                    name="firstName"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter your Last Name"
                    name="lastName"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-bold text-gray-700"
                    htmlFor="Initiated Name"
                  >
                    Initiated Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter your Initiated Name"
                    name="Initiated Name"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-bold text-gray-700"
                    htmlFor="Whatsapp Number"
                  >
                    Whatsapp Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Whatsapp Number"
                    name="Whatsapp Number"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-bold text-gray-700"
                    htmlFor="Contact Number"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Contact Number"
                    name="Contact Number"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-gray-700" htmlFor="email">
                    email
                  </label>
                  <input
                    type="text"
                    placeholder="xyz@example.com"
                    name="email"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-bold text-gray-700"
                    htmlFor="Date Of birth"
                  >
                    Date Of birth
                  </label>
                  <ReactDatePicker
                    icon={<SlCalender className="ml-0.5 mt-0.5" />}
                    showIcon
                    name="Date Of birth"
                    startDate={"10-10-1920"}
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-bold text-gray-700" htmlFor="Gender">
                    Gender
                  </label>
                  <select
                    name="Gender"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-gray-700" htmlFor="Address">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    name="Address"
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 w-[75vw] md:w-full`}
                  />
                </div>
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

export default AddVolunteer;

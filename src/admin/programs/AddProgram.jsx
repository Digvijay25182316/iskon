import React from "react";
import SearchBox from "../../components/SearchBox";
import SubmitButtonForms from "../../components/SubmitFormButton";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddProgram() {
  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-screen">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Add Programs
        </p>
        <div className="hidden md:block">
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Add Programs
      </p>
      <div className="md:pl-16">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="program_name"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Course Name{" "}
              </label>
              <input
                type="text"
                name="program_name"
                placeholder="enter the course name"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="program_level"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Course Level{" "}
              </label>
              <input
                type="text"
                placeholder="enter the course Level"
                name="course_level"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="number_of_sessions"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Number of sessions{" "}
              </label>
              <input
                type="text"
                placeholder="enter the number of sessions"
                name="number_of_sessions"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="start_date"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Start Date{" "}
              </label>
              <DatePicker
                showIcon
                selected={new Date()}
                onChange={(e) => console.log(e?.getDate())}
                name="start_date"
                icon={<SlCalender className={`m-0.5 bg-white text-black`} />}
                className={`px-4 py-1.5 border rounded-md focus:outline-none w-full bg-white text-black border-gray-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="expected_end_date"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Expected End Date{" "}
              </label>
              <DatePicker
                showIcon
                selected={new Date()}
                onChange={(e) => console.log(e?.getDate())}
                name="expected_end_date"
                icon={<SlCalender className={`m-0.5 bg-white text-black`} />}
                className={`px-4 py-1.5 border rounded-md focus:outline-none w-full bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="actual_end_date"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Actual End Date{" "}
              </label>
              <DatePicker
                showIcon
                selected={new Date()}
                onChange={(e) => console.log(e?.getDate())}
                name="actual_end_date"
                icon={<SlCalender className={`m-0.5 bg-white text-black`} />}
                className={`px-4 py-1.5 border rounded-md focus:outline-none w-full bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="program_name"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Current Status{" "}
              </label>
              <select
                name=""
                id=""
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              >
                <option value="Active">Active</option>
                <option value="In Active">In Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
          <SubmitButtonForms
            containerStyles="flex items-center justify-center mt-10"
            buttonStyles={`text-lg  px-4 py-1 bg-stone-200 rounded-md text-black`}
            isLoading={false}
            content="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default AddProgram;

import React, { useState } from "react";
import SubmitButtonForms from "../../components/SubmitFormButton";
import LoadingSkeleton from "./ProgramSkeleton";
import { FiPlus } from "react-icons/fi";
import AddVolunteer from "./AddVolunteer";

function Addprogram() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSliderOpen, setSliderOpen] = useState(false);
  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-full">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Add programs
        </p>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Add program
      </p>
      <div className="md:pl-16 ">
        <form className="bg-white p-5 rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Program Name{" "}
              </label>
              <input
                name="name"
                placeholder="gitasar batch-1/2/3/society program"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="description"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Program Description{" "}
              </label>
              <input
                type="text"
                name="description"
                placeholder="Something About the program"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="incharge"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Program Incharge{" "}
              </label>
              <div className="flex items-center w-full gap-1">
                {!isLoading ? (
                  <select
                    name={"incharge"}
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 flex-1`}
                  >
                    <option value={"harisham pr"}>Harisham Pr</option>
                  </select>
                ) : (
                  <LoadingSkeleton />
                )}
                <button
                  onClick={() => {
                    setModalOpen(!isModalOpen);
                    setSliderOpen(!isSliderOpen);
                  }}
                  className="flex items-center text-lg bg-gray-200 w-max px-3 h-max py-1 gap-2 rounded-md"
                  type="button"
                >
                  <FiPlus />
                  New
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="mentor"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Program Mentor{" "}
              </label>
              <div className="flex items-center w-full gap-1">
                {!isLoading ? (
                  <select
                    name={"mentor"}
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 flex-1`}
                  >
                    <option value={"harisham pr"}>Harisham Pr</option>
                  </select>
                ) : (
                  <LoadingSkeleton />
                )}
                <button
                  onClick={() => {
                    setModalOpen(!isModalOpen);
                    setSliderOpen(!isSliderOpen);
                  }}
                  className="flex items-center text-lg bg-gray-200 w-max px-3 h-max py-1 gap-2 rounded-md"
                  type="button"
                >
                  <FiPlus />
                  New
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="coordinator"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Program Coordinator{" "}
              </label>
              <div className="flex items-center w-full gap-1">
                {!isLoading ? (
                  <select
                    name={"coordinator"}
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 flex-1`}
                  >
                    <option value={"harisham pr"}>Harisham Pr</option>
                  </select>
                ) : (
                  <LoadingSkeleton />
                )}
                <button
                  onClick={() => {
                    setModalOpen(!isModalOpen);
                    setSliderOpen(!isSliderOpen);
                  }}
                  className="flex items-center text-lg bg-gray-200 w-max px-3 h-max py-1 gap-2 rounded-md"
                  type="button"
                >
                  <FiPlus />
                  New
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="preacher"
                className={`font-semibold ml-2 text-stone-800`}
              >
                preacher{" "}
              </label>
              <div className="flex items-center w-full gap-1">
                {!isLoading ? (
                  <select
                    name={"preacher"}
                    className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300 flex-1`}
                  >
                    <option value={"harisham pr"}>Harisham Pr</option>
                  </select>
                ) : (
                  <LoadingSkeleton />
                )}
                <button
                  onClick={() => {
                    setModalOpen(!isModalOpen);
                    setSliderOpen(!isSliderOpen);
                  }}
                  className="flex items-center text-lg bg-gray-200 w-max px-3 h-max py-1 gap-2 rounded-md"
                  type="button"
                >
                  <FiPlus />
                  New
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="audianceType"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Audiance Type{" "}
              </label>
              <input
                type="text"
                placeholder="Children,Family,Boys,Girls,Married Couples etc."
                name="audianceType"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="location"
                className={`font-semibold ml-2 text-stone-800`}
              >
                Progam Location{" "}
              </label>
              <input
                type="text"
                placeholder="temple area"
                name="location"
                className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
              />
            </div>
          </div>
          <SubmitButtonForms
            containerStyles="flex items-center justify-center mt-10"
            buttonStyles={`text-lg  px-4 py-1 bg-blue-200 rounded-md text-black`}
            isLoading={false}
            content="submit"
          />
        </form>
      </div>
      <AddVolunteer
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        isSliderOpen={isSliderOpen}
        setSliderOpen={setSliderOpen}
      />
    </div>
  );
}

export default Addprogram;

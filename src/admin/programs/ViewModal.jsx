import {
  AcademicCapIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import DateFormater from "../../components/Dateformatter";
import programs from "../../data/Programs";

function ViewModal({ program, toggleSlider, isOpen }) {
  if (isOpen)
    return (
      <>
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50"
              : ""
          }
        >
          <div
            className={`fixed bottom-0 left-0 w-full h-[90%] shadow bg-white text-black p-4 transition-transform duration-500 rounded-t-3xl `}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 p-2 rounded-full text-xl bg-gray-100 hover:bg-purple-200"
              onClick={toggleSlider}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="">
              <div>
                <div className="flex gap-5 items-center">
                  <p className="bg-purple-100 w-max p-2 rounded-full text-purple-600">
                    <AcademicCapIcon className="h-8 w-8" />
                  </p>
                  <div>
                    <p className="text-xl font-bold">{program?.programName}</p>
                    <p className="text-gray-500 ">{program?.description}</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-10">
                  <div>
                    <div className="flex items-center text-gray-700 font-bold">
                      Location :{" "}
                      <p className="text-gray-600 font-normal">
                        {program?.location}
                      </p>
                    </div>

                    <div className="flex flex-col text-gray-700 font-bold mt-3">
                      Program Audience Type :{" "}
                      <div className="text-gray-600 font-normal">
                        {program?.audienceType}
                      </div>
                    </div>

                    <div className="flex flex-col bg-purple-50 w-max p-2 rounded-xl">
                      <p>Preacher : </p>
                      {program?.preacher?.initiatedName ? (
                        <p className="text-blue-500 hover:underline flex cursor-pointer">
                          <UserCircleIcon className="h-6 w-6" />
                          {program?.preacher?.initiatedName}
                        </p>
                      ) : (
                        <p className="text-blue-500 hover:underline flex cursor-pointer">
                          <UserCircleIcon className="h-6 w-6" />
                          {program?.preacher?.firstName +
                            " " +
                            program?.preacher?.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {errorMessage && (
              <div className="h-full w-full flex text-red-500 items-center justify-center">
                {errorMessage}
              </div>
            )} */}
          </div>
        </div>
      </>
    );
}

export default ViewModal;

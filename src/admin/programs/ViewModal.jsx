import {
  AcademicCapIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import DateFormater from "../../components/Dateformatter";
import programs from "../../data/Programs";

function ViewModal({ id, toggleSlider, isOpen }) {
  const [ProgramData, setProgramData] = useState(programs ? programs[0] : null);
  const [isErrorNames, setIsErrorProgram] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //   useEffect(() => {
  //     (async () => {
  //       await fetch(`/api/admin/program/${id}`)
  //         .then((data) => {
  //           console.log(data);
  //           if (data.ok) {
  //             return data.json();
  //           } else {
  //             setIsErrorProgram(true);
  //             return data.json();
  //           }
  //         })
  //         .then((data) => {
  //           isErrorNames
  //             ? setIsErrorProgram(data.message)
  //             : setProgramData(data.data);
  //         })
  //         .catch((error) => {
  //           setErrorMessage(error.message || "An error occurred");
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //     })();
  //   }, [id, isErrorNames]);
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
                    <p className="text-xl font-bold">
                      {ProgramData?.program_name}
                    </p>
                    <p className="text-gray-500 ">
                      {ProgramData?.program_description}
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-10">
                  <div>
                    <div className="mt-5 flex items-center gap-10">
                      <div className="flex items-center text-gray-700 font-bold">
                        Location :{" "}
                        <p className="text-gray-600 font-normal">
                          {ProgramData?.program_location}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-700 font-bold">
                        Levels :{" "}
                        <p className="bg-gray-100 font-normal px-2 rounded-lg text-purple-600">
                          {ProgramData?.courses?.length.toString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-700 font-bold mt-3">
                      Program Audience Type :{" "}
                      <div className="text-gray-600 font-normal">
                        {ProgramData?.program_audiance?.map((item, key) => (
                          <p key={key}>{item}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-5 mt-2">
                      <div className="flex flex-col bg-purple-50 w-max p-2 rounded-xl">
                        <p>Preacher : </p>
                        {ProgramData?.program_preacher?.initiated_name ? (
                          <p className="text-blue-500 hover:underline flex cursor-pointer">
                            <UserCircleIcon className="h-6 w-6" />
                            {ProgramData?.program_preacher?.initiated_name}
                          </p>
                        ) : (
                          <p className="text-blue-500 hover:underline flex cursor-pointer">
                            <UserCircleIcon className="h-6 w-6" />
                            {ProgramData?.program_preacher?.first_name +
                              " " +
                              ProgramData?.program_preacher?.last_name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-0 md:text-start text-center font-semibold text-purple-700">
                    {ProgramData?.courses?.length === 0 && (
                      <p>No Levels To Show</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {errorMessage && (
              <div className="h-full w-full flex text-red-500 items-center justify-center">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default ViewModal;

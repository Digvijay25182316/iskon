import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import LoadingProgramSkeleton from "./ProgramLoadingSkeleton";
import ProgramCard from "./ProgramCard";
import programs from "../../data/Programs";

function ProgramsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // const [isErrorNames, setIsErrorProgram] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ProgramsNames, setProgramsNames] = useState(programs ? programs : []);
  // const [successMessage, setSuccessMessage] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     await fetch("/api/admin/program")
  //       .then((data) => {
  //         if (data.ok) {
  //           return data.json();
  //         } else {
  //           setIsErrorProgram(true);
  //           return data.json();
  //         }
  //       })
  //       .then((data) => {
  //         isErrorNames
  //           ? setErrorMessage(data.message)
  //           : setProgramsNames(data.data);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message || "An error occurred");
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //         isErrorNames && setIsModalOpen(true);
  //       });
  //   })();
  // }, [isErrorNames]);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setErrorMessage("");
  };
  return (
    <div className="min-h-screen md:ml-36 md:mt-0 mt-14">
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-10">Programs</p>
      <div className="md:px-10 px-5 ">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <LoadingProgramSkeleton />
            <LoadingProgramSkeleton />
            <LoadingProgramSkeleton />
            <LoadingProgramSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {ProgramsNames ? (
              ProgramsNames?.map((program, key) => (
                <ProgramCard program={program} key={key} />
              ))
            ) : (
              <div className="flex items-center justify-center md:w-[80vw] mt-40">
                <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                  <CalendarIcon className="h-16 w-16" />
                  No Program To Show
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramsList;

import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { SERVER_ENDPOINT } from "../../lib/server";

function VolunteersList() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [thisPageElements, setThisPageElements] = useState(
    totalElements > 10 ? 10 : totalElements
  );
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch(`${SERVER_ENDPOINT}/volunteer/`)
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorNames(true);
            return data.json();
          }
        })
        .then((data) => {
          console.log(data);
          if (isErrorNames) {
            setIsErrorNames(data.message);
          } else {
            setVolunteerNames(data?.content);
            setTotalElements(data?.totalElements);
            setThisPageElements(data?.pageable?.pageSize);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [isErrorNames]);
  const previousPage = () => {
    setThisPageElements((prev) => prev - 10);
  };

  const afterPage = () => {
    setThisPageElements((prev) => prev + 10);
  };

  return (
    <div className="min-h-screen md:ml-36">
      <div className="flex items-center pt-10 justify-between">
        <p className="text-2xl font-bold text-gray-600 pl-10 ">Volunteers</p>
        <div className="pr-10">
          <div className="flex items-center gap-3">
            <p>
              {thisPageElements > totalElements
                ? totalElements
                : thisPageElements}{" "}
              of {totalElements}
            </p>
            <div className="flex items-center gap-2">
              <button
                className={`${
                  thisPageElements <= 10
                    ? "bg-purple-200 text-purple-400"
                    : "bg-purple-300 text-purple-700"
                } p-1 rounded-full`}
                onClick={previousPage}
                disabled={thisPageElements <= 10}
              >
                <ChevronLeftIcon className="h-5 w-5 text-purple-700" />
              </button>
              <button
                className={`${
                  thisPageElements === totalElements
                    ? "bg-purple-200 text-purple-400"
                    : "bg-purple-300 text-purple-700"
                } p-1 rounded-full`}
                onClick={afterPage}
                disabled={thisPageElements === totalElements}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 mt-5">
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 my-5">
            {volunteerNames.length > 0 ? (
              volunteerNames?.map((volunteer, key) => (
                <VolunteerCard key={key} volunteer={volunteer} />
              ))
            ) : (
              <div className="flex items-center justify-center md:w-[80vw] mt-40">
                <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                  <UserIcon className="h-16 w-16" />
                  No Volunteer To Show
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteersList;

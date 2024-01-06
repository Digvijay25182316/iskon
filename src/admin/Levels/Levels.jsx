import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import LoadingLevelSkeleton from "./LoadingLevelSkeleton";
import LevelCard from "./LevelCard";
import courseNames from "../../data/Courses";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/Store";

function LevelsList() {
  const { dispatch } = useMyContext();
  const { code } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorCourse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [LevelNames, setLevelNames] = useState(courseNames ? courseNames : []);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (code) {
      dispatch({ type: "UPDATE_CODE", payload: code });
    }
    (async () => {
      setIsLoading(true);
      await fetch("/api/admin/course")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorCourse(true);
            return data.json();
          }
        })
        .then((data) => {
          isErrorNames
            ? setErrorMessage(data.message)
            : setLevelNames(data.data);
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [isErrorNames, code, dispatch]);
  return (
    <div className="md:pl-36">
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-5">Courses</p>
      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
            <LoadingLevelSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {LevelNames ? (
              LevelNames?.map((course, key) => (
                <LevelCard key={key} level={course} />
              ))
            ) : (
              <div className="flex items-center justify-center md:w-[80vw] mt-40">
                <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                  <AcademicCapIcon className="h-16 w-16" />
                  No Course To Show
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LevelsList;

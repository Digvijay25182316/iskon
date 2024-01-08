import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import LoadingCourseSkeleton from "./LoadingCourseSkeleton";
import CoursesCard from "./CourseCard";
import { SERVER_ENDPOINT } from "../../lib/server";

function CoursesList() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorNames, setIsErrorCourse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coursesNames, setCoursesNames] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch(`${SERVER_ENDPOINT}/course/`)
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
            : setCoursesNames(data.content);
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [isErrorNames]);

  return (
    <div className="md:pl-36 md:mt-0 mt-14">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-5">Courses</p>
      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {coursesNames?.length > 0 ? (
              coursesNames?.map((course, key) => (
                <CoursesCard key={key} course={course} />
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

export default CoursesList;

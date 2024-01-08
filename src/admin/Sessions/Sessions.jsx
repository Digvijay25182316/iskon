import React, { useEffect, useState } from "react";
import { useMyContext } from "../../context/Store";
import { useParams } from "react-router-dom";
import SessionCard from "./SessionCard";
import LoadingSessionSkeleton from "../Sessions/LoadingSessions";
import { SERVER_ENDPOINT } from "../../lib/server";
import { ClockIcon } from "@heroicons/react/24/outline";

function Sessions() {
  const { dispatch } = useMyContext();
  const { code } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorNames, setIsErrorCourse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SessionNames, setSessionNames] = useState([]);
  console.log(code);

  useEffect(() => {
    if (code) {
      dispatch({ type: "UPDATE_CODE", payload: code });
    }
    (async () => {
      setIsLoading(true);
      await fetch(`${SERVER_ENDPOINT}/session/`)
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
            : setSessionNames(data.content);
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [dispatch, code, isErrorNames]);
  return (
    <div className="md:pl-36 md:mt-0 mt-14">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-5">Sessions</p>
      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
            <LoadingSessionSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {SessionNames.length > 0 ? (
              SessionNames?.map((session, key) => (
                <SessionCard key={key} session={session} />
              ))
            ) : (
              <div className="flex items-center justify-center md:w-[80vw] mt-40">
                <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                  <ClockIcon className="h-16 w-16" />
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

export default Sessions;

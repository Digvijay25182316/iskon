"use client";
import { UserIcon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import DateFormater from "../../components/Dateformatter";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SERVER_ENDPOINT } from "../../lib/server";

function ViewModal({ volunteer, id, toggleSlider, isOpen }) {
  const [VolunteerData, setVolunteerData] = useState(
    volunteer ? volunteer : null
  );
  const [isErrorNames, setIsErrorCourse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     await fetch(`${SERVER_ENDPOINT}/volunteer/id/${id}`)
  //       .then((data) => {
  //         if (data.ok) {
  //           return data.json();
  //         } else {
  //           setIsErrorCourse(true);
  //           return data.json();
  //         }
  //       })
  //       .then((data) => {
  //         isErrorNames
  //           ? setIsErrorCourse(data.message)
  //           : setVolunteerData(data.data);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message || "An error occurred");
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   })();
  // }, [id, isErrorNames]);
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
            <div>
              <div className="flex gap-5 items-center">
                <p className="bg-purple-100 w-max p-2 rounded-full text-purple-600">
                  <UserIcon className="h-8 w-8" />
                </p>
                <div className="flex flex-col">
                  <p className="text-gray-700 font-bold text-lg">
                    {VolunteerData?.firstName} {VolunteerData?.lastName}
                  </p>
                  <p className="text-gray-500 text-md font-normal">
                    {VolunteerData?.initiatedName}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center text-md font-normal gap-5 mt-1">
                    <p className="text-md font-normal flex text-purple-700 items-center">
                      Service Interested
                      <HeartIcon className="h-5 w-5" /> :
                    </p>
                    <p>
                      {VolunteerData?.serviceInterested
                        ? VolunteerData?.serviceInterested
                        : "No Service Selected"}
                    </p>
                  </div>
                  <div className="flex items-center text-md font-normal gap-5 mt-1">
                    <p className="text-md font-normal flex text-purple-700 items-center">
                      Current Service :
                    </p>
                    <p>
                      {VolunteerData?.currentService
                        ? VolunteerData?.currentService
                        : "No Service Selected"}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-purple-100 p-5 rounded-2xl">
                  <p className="text-gray-500 mt-2">Personal Information</p>
                  <div className="font-normal grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
                    <div className="flex items-center gap-2">
                      email <EnvelopeIcon className="h-5 w-5 text-red-500" /> :{" "}
                      <a
                        href={`mailto:${VolunteerData?.email}`}
                        className="text-red-700 hover:underline"
                      >
                        {VolunteerData?.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      whatsapp{" "}
                      <PhoneIcon className="h-5 w-5 text-white bg-green-400 rounded-full p-0.5" />{" "}
                      :
                      <a
                        href={`https://wa.me/${VolunteerData?.waNumber}`}
                        className="text-blue-600 hover:underline"
                      >
                        {VolunteerData?.waNumber}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      contact <PhoneIcon className="h-5 w-5 text-blue-500" />:{" "}
                      <a
                        href={`tel:${VolunteerData?.contactNumber}`}
                        className="text-blue-600 hover:underline"
                      >
                        {VolunteerData?.contactNumber}
                      </a>
                    </div>
                    <div className="flex items-center">
                      Date Of Birth : <DateFormater date={VolunteerData?.dob} />
                    </div>
                    <p>Gender : {VolunteerData?.gender}</p>
                    <p>Address : {VolunteerData?.address}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 mt-5 bg-purple-50 p-5 rounded-2xl">
                  <div className="flex items-center text-md text-purple-700 font-normal">
                    {" "}
                    Joined Date : <DateFormater date={VolunteerData?.created} />
                  </div>
                  <div className="flex items-center text-md text-purple-700 font-normal">
                    {" "}
                    Last Updated :{" "}
                    <DateFormater date={VolunteerData?.modified} />
                  </div>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="h-full w-full flex text-red-500 items-center justify-center">
                Error : {errorMessage}
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default ViewModal;

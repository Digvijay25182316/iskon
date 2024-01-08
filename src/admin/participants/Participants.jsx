import DateFormater from "../../components/Dateformatter";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { SERVER_ENDPOINT } from "../../lib/server";
import DeleteModal from "../../components/DeleteModal";

function Participant() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorNames, setIsErrorParticipant] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [participantNames, setParticipantNames] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch(`${SERVER_ENDPOINT}/participant/`)
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorParticipant(true);
            return data.json();
          }
        })
        .then((data) => {
          isErrorNames
            ? setIsErrorParticipant(data.message)
            : setParticipantNames(data.content);
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
    <div className="md:w-[80vw] w-screen md:ml-36 md:mt-0 mt-16">
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-10">
        Participants
      </p>
      {!isLoading ? (
        <div className="md:px-10 px-5 py-5 lg:w-[83vw]">
          {participantNames.length > 0 ? (
            <div className="overflow-scroll overflow-y-hidden text-gray-700">
              <table className="">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Contact Number</th>
                    <th>Whatsapp Number</th>
                    <th>age</th>
                    <th>created at</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {participantNames?.map((participant, key) => (
                    <tr key={key}>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.firstName}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.lastName}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.email}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.gender}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.contactNumber}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.waNumber}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.age}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        <DateFormater date={participant.created} />
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        <div className="flex items-center gap-3">
                          <button className="text-gray-500 bg-gray-200 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg">
                            <EyeIcon className="h-6 w-6" />
                          </button>
                          <button className="text-gray-500 bg-gray-200 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg">
                            <PencilSquareIcon className="h-6 w-6" />
                          </button>
                          <button
                            className="text-red-500 bg-red-100 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg"
                            onClick={() => setIsDeleteOpen(true)}
                          >
                            <TrashIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex items-center justify-center md:w-[80vw] mt-40">
              <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                <UserGroupIcon className="h-16 w-16" />
                No Participant To Show
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
      {isErrorNames && (
        <p className="text-red-500">
          <ExclamationCircleIcon className="h-6 w-6" />
          {errorMessage}
        </p>
      )}
      <DeleteModal
        onClose={() => setIsDeleteOpen(false)}
        isDeleteModalOpen={isDeleteOpen}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-red-400 bg-red-100 p-1 rounded-full">
            <ExclamationTriangleIcon className="h-10 w-10" />
          </p>
          <p className="text-lg font-bold">Are You Sure ?</p>
          <p className="w-60 text-center text-gray-600">
            Deleting this Volunteer cannot be undone. All Values associated with
            this Volunteer will be lost
          </p>
          <div className="flex flex-col gap-2">
            <button className="border w-full px-5 py-1.5 text-lg rounded-md bg-red-500 text-white hover:bg-red-700">
              Delete Volunteer
            </button>
            <button
              className="border w-full px-5 py-1.5 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-700"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  );
}

export default Participant;

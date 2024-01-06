import {
  AcademicCapIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ViewModal from "./ViewModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "../../components/DeleteModal";

function ProgramCard({ program }) {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <div className="bg-white p-3 rounded-2xl shadow flex flex-col">
      <div className=" flex items-center justify-between">
        <p className="bg-purple-100 text-purple-500 p-2 rounded-full">
          <CalendarIcon className="h-6 w-6" />
        </p>
        <div className="flex items-center gap-5">
          <button
            className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setIsViewOpen(true)}
          >
            <EyeIcon className="h-6 w-6" />
          </button>
          <button
            className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setIsUpdateOpen(true)}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>
          <button
            className="bg-red-100 text-red-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => {
              setIsDeleteOpen(true);
            }}
          >
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-700">
          {program.program_name}
        </p>
        <p className="text-gray-500">{program.program_description}</p>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-5">
            <p>Incharge : </p>
            {program.program_incharge?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_incharge?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_incharge?.first_name +
                  " " +
                  program.program_incharge?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Coordinator : </p>
            {program.program_coordinator?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_coordinator?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_coordinator?.first_name +
                  " " +
                  program.program_coordinator?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Mentor : </p>
            {program.program_mentor?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_mentor?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_mentor?.first_name +
                  " " +
                  program.program_mentor?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Preacher : </p>
            {program.program_preacher?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_preacher?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_preacher?.first_name +
                  " " +
                  program.program_preacher?.last_name}
              </p>
            )}
          </div>
        </div>
      </div>
      <ViewModal
        isOpen={isViewOpen}
        toggleSlider={() => setIsViewOpen(false)}
        id={program._id}
      />
      <UpdateModal
        isOpen={isUpdateOpen}
        toggleSlider={() => setIsUpdateOpen(false)}
        id={program._id}
      />
      <DeleteModal onClose={() => setIsDeleteOpen(false)}>
        <div className="flex flex-col items-center gap-3">
          <p className="text-red-400 bg-red-100 p-1 rounded-full">
            <ExclamationTriangleIcon className="h-10 w-10" />
          </p>
          <p className="text-lg font-bold">Are You Sure ?</p>
          <p className="w-60 text-center text-gray-600">
            Deleting this course cannot be undone. All Values associated with
            this course will be lost
          </p>
          <div className="flex flex-col gap-2">
            <button className="border w-full px-5 py-1.5 text-lg rounded-md bg-red-500 text-white hover:bg-red-700">
              Delete Course
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

export default ProgramCard;

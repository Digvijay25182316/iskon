"use client";
import {
  EyeIcon,
  TrashIcon,
  UserCircleIcon,
  PencilSquareIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ViewModal from "./ViewModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "../../components/DeleteModal";

function VolunteerCard({ volunteer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className=" bg-white text-lg text-gray-700 font-semibold flex items-center p-3 rounded-2xl justify-between shadow">
      <div className="flex items-center text-lg">
        <UserCircleIcon className="h-10 w-10 text-purple-800 drop-shadow-lg" />
        <div className=" drop-shadow-lg">
          {volunteer.initiatedName ? (
            <p className="px-4">{volunteer.initiatedName}</p>
          ) : (
            <p className="px-4">
              {volunteer.firstName + " " + volunteer.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="text-gray-500 bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100"
          onClick={() => setIsModalOpen(true)}
        >
          <EyeIcon className="h-6 w-6" />
        </button>
        <button
          className="text-gray-500 bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100"
          onClick={() => setIsUpdateOpen(true)}
        >
          <PencilSquareIcon className="h-6 w-6" />
        </button>
        <button
          className="text-red-500 bg-red-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100"
          onClick={() => setIsDeleteOpen(true)}
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
      <ViewModal
        isOpen={isModalOpen}
        toggleSlider={() => setIsModalOpen(false)}
        id={volunteer.id}
        volunteer={volunteer}
      />
      <UpdateModal
        isOpen={isUpdateOpen}
        toggleSlider={() => setIsUpdateOpen(false)}
        id={volunteer.id}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
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

export default VolunteerCard;

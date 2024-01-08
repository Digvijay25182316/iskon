import UpdateModal from "./UpdateModal";
import {
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import DeleteModal from "../../components/DeleteModal";

function LevelCard({ level }) {
  const [UpdateOpen, setUpdateOpen] = useState(false);
  const [DeleteOpen, setDeleteOpen] = useState(false);
  return (
    <div className="bg-white p-3 rounded-2xl shadow flex flex-col">
      <div className=" flex items-center justify-between">
        <p className="bg-purple-100 text-purple-500 p-2 rounded-full">
          <ArrowTrendingUpIcon className="h-6 w-6" />
        </p>
        <div className="flex items-center gap-5">
          <Link to={`/admin/programs/`}>
            <button className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg">
              <EyeIcon className="h-6 w-6" />
            </button>
          </Link>
          <button
            className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setUpdateOpen(!UpdateOpen)}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>
          <button
            className="bg-red-100 text-red-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setDeleteOpen(true)}
          >
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-700">{level?.number}</p>
        <p className="text-gray-500">{level?.description}</p>
        {level?.status === "INACTIVE" ? (
          <p className="text-red-600 bg-red-100 w-max px-2 rounded-md text-sm">
            {level?.status}
          </p>
        ) : (
          <p className="text-green-600 bg-green-100 w-max px-2 rounded-md text-sm">
            {level?.status}
          </p>
        )}
        {/* <div className="flex flex-col gap-2 mt-6"> */}
        {/* <div className="flex items-center gap-5">
            <p>Mentor-1 : </p>
            {level?.mentor1?.initiatedName ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.mentor1?.initiatedName}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.mentor1?.firstName + " " + level?.mentor1?.lastName}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Mentor-2 : </p>
            {level?.mentor2?.initiatedName ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.mentor2?.initiatedName}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.mentor2?.firstName + " " + level?.mentor2?.lastName}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Preacher : </p>
            {level?.preacher?.initiatedName ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.preacher?.initiatedName}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {level?.preacher?.firstName + " " + level?.preacher?.lastName}
              </p>
            )}
          </div> */}
        {/* </div> */}
        <div className="flex items-center gap-5">
          <p>createdBy : </p>
          <p>{level?.createdBy}</p>
        </div>
      </div>
      <UpdateModal
        id={level?._id}
        isOpen={UpdateOpen}
        toggleSlider={() => setUpdateOpen(!UpdateOpen)}
      />
      <DeleteModal
        isDeleteModalOpen={DeleteOpen}
        onClose={() => setDeleteOpen(false)}
      >
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
            <button className="border w-full px-5 py-1.5 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-700">
              Cancel
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  );
}

export default LevelCard;

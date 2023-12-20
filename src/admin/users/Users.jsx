import React from "react";
import usersList from "../../data/Users";
import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Users() {
  return (
    <div className="mt-32 md:mt-0">
      <p className="text-3xl font-bold text-gray-700 py-5 pl-10">Users</p>
      <div className="grid grid-cols-1 gap-5 overflow-scroll md:max-h-[87vh] scroll-hidden mb-5 max-h-[70vh]">
        {usersList?.map((user, index) => (
          <div
            key={index}
            className="bg-white lg:w-[90vw] md:w-[80vw] md:px-4 px-2 py-1.5 rounded-xl mx-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center md:gap-10 gap-2">
                <p className="bg-blue-100 w-max p-3 rounded-full ">
                  <FaUser />
                </p>
                <p>{user.fullName}</p>
              </div>
              <div className="flex items-center gap-6">
                <p>{user.role}</p>
                <button className=" hover:bg-red-100 hover:text-red-600 text-2xl py-1.5 px-2 rounded-xl text-gray-700">
                  <MdEdit />
                </button>
                <button className=" hover:bg-red-100 hover:text-red-600 px-2 py-1.5 text-2xl rounded-xl text-gray-700">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

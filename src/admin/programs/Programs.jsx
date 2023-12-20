import React from "react";
import SearchBox from "../../components/SearchBox";
import ProgramsList from "../../data/Programs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="w-screen mt-32 md:mt-0 md:p-5 p-3">
      <div className="md:flex items-center justify-between w-full pl-16 hidden">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Programs
        </p>
        <div>
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Program
      </p>
      <div className="md:pl-16 md:mt-3">
        <div className="w-full bg-white rounded-t-xl drop-shadow px-5 py-1.5 flex items-center justify-between">
          <div>
            <Link to={"/admin/addprogram"}>
              <button className="flex items-center gap-3 px-4 py-1 bg-blue-200 rounded-lg">
                <FiPlus />
                Program
              </button>
            </Link>
          </div>
          <div className="flex items-center text-gray-600 gap-5">
            <p>1500</p>
            <div className="flex items-center text-gray-400 gap-5 text-xl">
              <p className="hover:bg-gray-100 rounded-full p-1">
                <FaAngleLeft />
              </p>
              <p className="hover:bg-gray-100 rounded-full p-1">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-scroll scroll-hidden w-full bg-white rounded-b-xl pb-5 shadow max-h-[78vh] z-0">
          <table>
            <thead>
              <tr>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  Sr
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  name
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  description
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  Location
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  Sessions
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  start
                </th>
                <th className="w-max whitespace-nowrap text-xl text-gray-700">
                  expected end
                </th>
              </tr>
            </thead>
            <tbody>
              {ProgramsList?.map((program, index) => (
                <tr key={index} className="border-b border-t">
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {index + 1}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.name}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.description}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.program_location}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.number_of_sessions}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.start_date}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    {program.expected_end_date}
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    <button className="text-purple-600 border-2 border-purple-400 px-2 py-1 text-lg rounded-lg transition-colors duration-300 hover:bg-purple-400 hover:text-white">
                      + sessions
                    </button>
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    <button className="text-purple-600 transition-colors duration-300 hover:text-red-600 hover:bg-gray-100 px-3 py-1.5 rounded-xl">
                      <MdEdit className="text-xl" />
                    </button>
                  </td>
                  <td className="w-max whitespace-nowrap px-5 py-2 text-md">
                    <button className="text-purple-600 transition-colors duration-300  hover:text-red-600 hover:bg-gray-100 px-3 py-1.5 rounded-xl">
                      <MdDelete className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Programs;

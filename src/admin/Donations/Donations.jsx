import React from "react";
import donationsList from "../../data/Donations";
import { FaUser } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import SearchBox from "../../components/SearchBox";

function Donations() {
  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-screen">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Donations
        </p>
        <div className="hidden md:block">
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Donations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 overflow-scroll scroll-hidden h-[70vh] md:pl-10 md:h-[85vh]">
        {donationsList?.map((donation, index) => (
          <div
            className="bg-white p-3 h-[150px] rounded-xl shadow flex flex-col"
            key={index}
          >
            <div className="flex items-center gap-2">
              <p className="bg-blue-100 w-max p-3 rounded-full ">
                <FaUser />
              </p>
              <div>
                <p className="font-semibold text-gray-700">
                  {donation.donorName}
                </p>
                <p className="font-semibold text-gray-500 text-sm ">
                  {donation.donationDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start pl-5 pt-3">
              <div className="flex items-center gap-3 text-green-600">
                <p className=" animate-bounce">
                  <FiPhoneCall />
                </p>
                <a href={`tel:${donation.contactNumber}`}>
                  {donation.contactNumber}
                </a>
              </div>
              <div className="flex items-center text-xl bg-green-500 text-white px-5 py-1.5 rounded-lg">
                <LuIndianRupee />
                {donation.donationAmount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donations;

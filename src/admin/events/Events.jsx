import React from "react";
import { FaUser } from "react-icons/fa6";
import eventData from "../../data/Events";
import SearchBox from "../../components/SearchBox";

function Activities() {
  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-screen">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Activities
        </p>
        <div className="hidden md:block">
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Activities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 overflow-scroll scroll-hidden h-[78vh] md:pl-10 md:h-[85vh]">
        {eventData?.map((event, index) => (
          <div
            className="bg-white p-3 min-h-[150px] rounded-xl shadow"
            key={index}
          >
            <div className="flex items-center gap-2">
              <p className="bg-blue-100 w-max p-3 rounded-full ">
                <FaUser />
              </p>
              <div>
                <p className="font-semibold text-gray-700">
                  {event.NameOfParticipant}
                </p>
                <p className="font-semibold text-gray-500 text-sm ">
                  {event.createdDate.toLocaleDateString().toString()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {event.eventDetails}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;

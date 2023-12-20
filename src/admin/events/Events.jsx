import React from "react";
import { FaUser } from "react-icons/fa6";
import eventData from "../../data/Events";

function Events() {
  return (
    <div className="md:mt-0 mt-32">
      <p className="text-3xl font-bold text-gray-700 py-5 pl-10">Events</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5">
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

export default Events;

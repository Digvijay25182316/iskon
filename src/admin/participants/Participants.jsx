import React from "react";
import SearchBox from "../../components/SearchBox";

function Participants() {
  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-screen">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Participants
        </p>
        <div className="hidden md:block">
          <SearchBox />
        </div>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Participants
      </p>
    </div>
  );
}

export default Participants;

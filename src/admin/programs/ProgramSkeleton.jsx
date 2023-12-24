import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const LoadingSkeleton = () => {
  return (
    <div className="w-full flex items-center bg-gray-300 justify-between rounded-lg">
      <div className="p-1 rounded animate-pulse">
        <div className="h-2.5 bg-gray-400 w-72"></div>
        <div className="h-2.5 bg-gray-400 w-40 mt-2"></div>
      </div>
      <MdKeyboardArrowDown className="text-lg" />
    </div>
  );
};

export default LoadingSkeleton;

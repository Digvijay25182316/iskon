import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-100">
      <div className="text-center">
        <div className="text-6xl font-bold text-red-500">404</div>
        <div className="text-xl text-gray-700 mb-4">
          Oops! The page you're looking for doesn't exist.
        </div>
        <Link
          to="/admin/dashboard"
          className="text-white bg-blue-500 px-4 py-2 rounded-full inline-block hover:bg-blue-600"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

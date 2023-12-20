import React from "react";
import SearchBox from "../../components/SearchBox";

function Dashboard() {
  return (
    <div className="min-h-screen p-5">
      <div className="flex items-center justify-between">
        <p>Dashboard</p>
        <SearchBox />
        <p>notification</p>
      </div>
    </div>
  );
}

export default Dashboard;

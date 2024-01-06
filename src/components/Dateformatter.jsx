"use client";
import React, { useEffect, useState } from "react";

function DateFormater({ date }) {
  const [formatted, setIsFormatted] = useState("");
  useEffect(() => {
    const newDate = date?.split("T")[0];
    setIsFormatted(newDate);
  }, [date]);
  return (
    <div className="w-max">
      <p>{formatted?.toString()}</p>
    </div>
  );
}

export default DateFormater;

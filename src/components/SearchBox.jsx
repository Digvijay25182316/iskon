import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";

function SearchBox() {
  const formref = useRef([]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formref.current[formref.current.length - 1]);
  };
  const onChange = (e) => {
    formref.current.push(e.target.value);
  };
  return (
    <div className="md:flex items-center bg-white pl-4 md:w-max border rounded-full w-full">
      <form className="flex items-center" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search ..."
          className="text-lg outline-none flex-1"
          onChange={onChange}
        />
        <button type="submit">
          <div className="p-2">
            <HiSearch className="text-2xl" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;

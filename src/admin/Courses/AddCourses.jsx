"use client";
import Modal from "../../components/ResponseModal";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SERVER_ENDPOINT } from "../../lib/server";
const programs = [
  "Gitasaar Batch 1",
  "Gitasaar Batch 2",
  "Gitasaar Batch 3",
  "Gitasaar Batch 4",
  "Gitasaar Batch 5",
  "Gitasaar Batch 6",
  "Gitasaar Batch 7",
  "Gitasaar Batch 8",
  "Gitasaar Batch 9",
  "Gitasaar Batch 0",
];
const course_type = [
  "Children Program",
  "Boys",
  "Girls",
  "Family",
  "Married Couples",
  "Children",
];
const course_location = [
  "In Temple",
  "Temple Hall",
  "Another Hall",
  "HAll",
  "Temple Hall",
  "Children",
];

function AddCourseForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [programNames, setProgramNames] = useState(programs ? programs : []);
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      code: formRef.current?.code?.value,
      name: formRef.current?.name?.value,
      description: formRef.current?.description?.value,
    };
    console.log(formdata);
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch(`${SERVER_ENDPOINT}/course/create`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(formdata),
    })
      .then((data) => {
        data.ok && setIsSuccess(true);
        return data.json();
      })
      .then((data) => {
        isSuccess
          ? setSuccessMessage(data.message)
          : setErrorMessage(data.message);
      })
      .catch((error) => {
        setErrorMessage(error.message || "An error occurred");
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalOpen(true);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setErrorMessage("");
  };
  return (
    <div className="min-h-screen md:ml-36 md:mt-0 mt-14">
      <div className="bg-white m-5 pt-16 rounded-xl pb-6">
        <h1 className="text-2xl font-bold text-gray-700 md:ml-20 ml-10 mb-16">
          Add New Course
        </h1>
        <form onSubmit={onSubmit} className="m-4" ref={formRef}>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="code">
                Course Code
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="code"
                  placeholder="coursecode goes here"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                />
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="name">
                Course Name
              </label>
              <input
                type="text"
                name="name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter The Course Name"
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="description">
                Course Description
              </label>
              <textarea
                name="description"
                className="border px-4 py-1.5 rounded-md flex-1 h-[40px] outline-none"
                placeholder="write some description about this course"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-6">
            <button
              className="text-gray-200 font-bold text-lg bg-purple-500 w-max px-5 py-1.5 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Modal
        isLoading={isLoading}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default AddCourseForm;

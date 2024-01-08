import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../context/Store";
import { useParams } from "react-router-dom";
import Modal from "../../components/ResponseModal";
import { SERVER_ENDPOINT } from "../../lib/server";

function AddSessions() {
  const { dispatch } = useMyContext();
  const { code } = useParams();
  const formRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (code) {
      dispatch({ type: "UPDATE_CODE", payload: code });
    }
  }, [dispatch, code]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      code: formRef.current?.code?.value,
      name: formRef.current?.name?.value,
      description: formRef.current?.description?.value,
      courseCode: code,
      durationInMinutes: formRef.current?.durationInMinutes?.value,
      videoUrl: formRef.current?.videoUrl?.value,
      presentationUrl: formRef.current?.presentationUrl?.value,
      notesUrl: formRef.current?.notesUrl?.value,
    };
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch(`${SERVER_ENDPOINT}/session/create`, {
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
          Add New Sessions
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="code">
                Session Code
              </label>
              <input
                type="text"
                placeholder="enter your program name"
                name="code"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="name">
                Session Name
              </label>
              <input
                type="text"
                placeholder="enter your program name"
                name="name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="description">
                Session Description
              </label>
              <textarea
                name="description"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="durationInMinutes"
              >
                Duration In minutes
              </label>
              <input
                type="text"
                name="durationInMinutes"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="videoUrl">
                Video Url
              </label>
              <input
                type="text"
                name="videoUrl"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="presentationUrl"
              >
                Presentation Url
              </label>
              <input
                type="text"
                name="presentationUrl"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="notesUrl">
                Notes Url
              </label>
              <input
                type="text"
                name="notesUrl"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-10">
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

export default AddSessions;

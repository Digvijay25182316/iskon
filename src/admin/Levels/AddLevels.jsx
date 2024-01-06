import Modal from "../../components/ResponseModal";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import programs from "../../data/Programs";
import { useParams } from "react-router-dom";
import { SERVER_ENDPOINT } from "../../lib/server";
import { useMyContext } from "../../context/Store";

function AddLevelsForm() {
  const { code } = useParams();
  const { dispatch } = useMyContext();
  const formRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (code) {
      dispatch({ type: "UPDATE_CODE", payload: code });
    }
    (async () =>
      await fetch(`${SERVER_ENDPOINT}/volunteer/`)
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorNames(true);
            return data.json();
          }
        })
        .then((data) => {
          isErrorNames
            ? setIsErrorNames(data.message)
            : setVolunteerNames(data.content);
          console.log(data);
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          isErrorNames && setIsModalOpen(true);
        }))();
  }, [isErrorNames, dispatch, code]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      number: formRef.current?.number?.value
        ? Number(formRef.current?.number?.value)
        : 0,
      description: formRef.current?.description?.value,
      programName: formRef.current?.programName?.value,
      courseCode: code,
      preacher1: formRef.current?.preacher1?.value
        ? Number(formRef.current?.preacher1?.value)
        : 0,
      preacher2: formRef.current?.preacher2?.value
        ? Number(formRef.current?.preacher2?.value)
        : 0,
      mentor: formRef.current?.mentor?.value
        ? Number(formRef.current?.mentor?.value)
        : 0,
      coordinator: formRef.current?.coordinator?.value
        ? Number(formRef.current?.coordinator?.value)
        : 0,
      expectedStartDate: formRef.current?.expectedStartDate?.value
        ? new Date(formRef.current?.expectedStartDate?.value).toISOString()
        : "",
      actualStartDate: formRef.current?.actualStartDate?.value
        ? new Date(formRef.current?.actualStartDate?.value).toISOString()
        : "",
      expectedEndDate: formRef.current?.expectedEndDate?.value
        ? new Date(formRef.current?.expectedEndDate?.value).toISOString()
        : "",
      actualEndDate: formRef.current?.actualEndDate?.value
        ? new Date(formRef.current?.actualEndDate?.value).toISOString()
        : "",
    };

    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch(`${SERVER_ENDPOINT}/level/create`, {
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
          Add New Level
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="number">
                Level Number
              </label>
              <input
                type="number"
                placeholder="enter your program name"
                name="number"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="description">
                Level Description
              </label>
              <textarea
                name="description"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="programName">
                Program Name
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="programName"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {programs ? (
                    programs?.map((program, key) => (
                      <option key={key} value={program.name}>
                        {program.name}
                      </option>
                    ))
                  ) : (
                    <option value="">No Program Available</option>
                  )}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="preacher1">
                Preacher 1
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="preacher1"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames.length > 0 ? (
                    volunteerNames?.map((volunteer, key) => (
                      <option key={key} value={volunteer.id}>
                        {volunteer.initiatedName
                          ? volunteer.initiatedName
                          : volunteer.firstName + volunteer.lastName}
                      </option>
                    ))
                  ) : (
                    <option value="">No Volunteers Available</option>
                  )}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="preacher2">
                Preacher 2
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="preacher2"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames.length > 0 ? (
                    volunteerNames?.map((volunteer, key) => (
                      <option key={key} value={volunteer.id}>
                        {volunteer.initiatedName
                          ? volunteer.initiatedName
                          : volunteer.firstName + volunteer.lastName}
                      </option>
                    ))
                  ) : (
                    <option value="">No Volunteers Available</option>
                  )}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="mentor">
                Level Mentor
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="mentor"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames.length > 0 ? (
                    volunteerNames?.map((volunteer, key) => (
                      <option key={key} value={volunteer.id}>
                        {volunteer.initiatedName
                          ? volunteer.initiatedName
                          : volunteer.firstName + volunteer.lastName}
                      </option>
                    ))
                  ) : (
                    <option value="">No Volunteers Available</option>
                  )}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="coordinator">
                Coordinator
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="coordinator"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames.length > 0 ? (
                    volunteerNames?.map((volunteer, key) => (
                      <option key={key} value={volunteer.id}>
                        {volunteer.initiatedName
                          ? volunteer.initiatedName
                          : volunteer.firstName + volunteer.lastName}
                      </option>
                    ))
                  ) : (
                    <option value="">No Volunteers Available</option>
                  )}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="coordinator">
                Expected Start Date
              </label>
              <input
                type="date"
                name="expectedStartDate"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="actualStartDate"
              >
                Actual Start Date
              </label>
              <input
                type="date"
                name="actualStartDate"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="expectedEndDate"
              >
                Expected End Date
              </label>

              <input
                type="date"
                name="expectedEndDate"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="actualEndDate"
              >
                Actual End Date
              </label>

              <input
                type="date"
                name="actualEndDate"
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

export default AddLevelsForm;

import Modal from "../../components/ResponseModal";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { SERVER_ENDPOINT } from "../../lib/server";

const audienceType = [
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

function AddProgramForm() {
  const formRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
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
        })
        .catch((error) => {
          setErrorMessage(error.message || "An error occurred");
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          isErrorNames && setIsModalOpen(true);
        }))();
  }, [isErrorNames]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      name: formRef.current?.name?.value,
      description: formRef.current?.description?.value,
      incharge: formRef.current?.incharge?.value
        ? Number(formRef.current?.incharge?.value)
        : 0,
      preacher: formRef.current?.preacher?.value
        ? Number(formRef.current?.preacher?.value)
        : 0,
      mentor: formRef.current?.mentor?.value
        ? Number(formRef.current?.mentor?.value)
        : 0,
      coordinator: formRef.current?.coordinator?.value
        ? Number(formRef.current?.coordinator?.value)
        : 0,
      audienceType: formRef.current?.audience?.value,
      location: formRef.current?.location?.value,
    };
    const header = new Headers();
    header.append("ContentType", "application/json");
    await fetch(`${SERVER_ENDPOINT}/program/create`, {
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
          Add New Program
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="name">
                Program Name
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
                Program Description
              </label>
              <textarea
                name="description"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="preacher">
                Program Preacher
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="preacher"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.length > 0 ? (
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
              <label className="font-bold text-gray-700" htmlFor="incharge">
                Program Incharge
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="incharge"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.length > 0 ? (
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
                Program Coordinator
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="coordinator"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.length > 0 ? (
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
                Program Mentor
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="mentor"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.length > 0 ? (
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
              <label className="font-bold text-gray-700" htmlFor="location">
                Program Location
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="location"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {course_location?.map((type, key) => (
                    <option value={type} key={key}>
                      {type}
                    </option>
                  ))}
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
              <label className="font-bold text-gray-700" htmlFor="audience">
                Program Audience Type
              </label>

              <select
                name="audience"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              >
                {audienceType?.map((item, key) => (
                  <option key={key}>{item}</option>
                ))}
              </select>
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

export default AddProgramForm;

"use client";
import { SERVER_ENDPOINT } from "../../lib/server";
import Modal from "../../components/ResponseModal";
import React, { useRef, useState } from "react";

function AddVolunteerForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      firstName: formRef.current?.firstName?.value,
      lastName: formRef.current?.lastName?.value,
      initiatedName: formRef.current?.initiatedName?.value,
      waNumber: formRef.current?.waNumber?.value,
      contactNumber: formRef.current?.contactNumber?.value,
      email: formRef.current?.email?.value,
      dob: formRef.current?.dob?.value
        ? new Date(formRef.current?.dob?.value).toISOString()
        : "",
      gender: formRef.current?.gender?.value,
      address: formRef.current?.address?.value,
      serviceInterested: formRef.current?.serviceInterested?.value,
      currentService: formRef.current?.currentService?.value,
    };
    console.log(formdata);
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch(`${SERVER_ENDPOINT}/volunteer/create`, {
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
      <div className="bg-white m-5 pt-10 rounded-xl pb-6">
        <h1 className="text-2xl font-bold text-gray-700 md:ml-20 ml-10 mb-10">
          Register New Volunteer
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your last name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Initiated Name</label>
              <input
                type="text"
                name="initiatedName"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your initiated name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Whatsapp Number</label>
              <input
                type="tel"
                name="waNumber"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your Whatsapp Number"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your Contact Number"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Gender</label>
              <select
                name="gender"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              >
                <option value="MALE">male</option>
                <option value="FEMALE">female</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="123 Main Street
                Cityville, State 12345
                United States"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">
                Service Interested
              </label>
              <input
                type="text"
                name="serviceInterested"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="123 Main Street
                Cityville, State 12345
                United States"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700">Current Service</label>
              <input
                type="text"
                name="currentService"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="123 Main Street
                Cityville, State 12345
                United States"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-5">
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

export default AddVolunteerForm;

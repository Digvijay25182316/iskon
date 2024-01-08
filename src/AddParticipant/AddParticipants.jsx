import React, { useState } from "react";
import { SERVER_ENDPOINT } from "../lib/server";
import Modal from "../components/ResponseModal";

const MultiStepForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    waNumber: "",
    dob: "",
    gender: "MALE",
    contactNumber: "",
    email: "",
    address: "",
    city: "",
    maritalStatus: "Non Married",
    education: "",
    occupation: "",
    reference: "",
    notes: "",
    numberOfChildren: 0,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (name, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formState.dob = new Date(formState.dob).toISOString();
    const header = new Headers();
    console.log(formState);
    header.append("Content-Type", "application/json");
    await fetch(`${SERVER_ENDPOINT}/participant/create`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(formState),
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
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-orange-200 via-green-200 to-purple-200 flex flex-col md:items-center justify-center text-gray-800 py-5">
      <h1 className="text-center text-blue-700 text-3xl font-bold pb-10">
        Participant Registeration
      </h1>
      <div className="md:min-w-3xl mx-2 bg-white p-5 md:p-10 rounded-3xl shadow-lg shadow-purple-200">
        <div className="flex items-center gap-8 justify-center">
          <p
            className={` border-8 transition-colors duration-500 ${
              currentStep === 1 ? "border-blue-700" : "border-gray-300"
            } md:min-w-40 min-w-24 rounded-lg`}
          ></p>
          <p
            className={` border-8 transition-colors duration-500 ${
              currentStep === 2 ? "border-blue-700" : "border-gray-300"
            } md:min-w-40 min-w-24 rounded-lg`}
          ></p>
          <p
            className={` border-8 transition-colors duration-500 ${
              currentStep === 3 ? "border-blue-700" : "border-gray-300"
            } md:min-w-40 min-w-24 rounded-lg`}
          ></p>
        </div>
        <form action="" className="flex">
          {currentStep === 1 && (
            <Step1
              personalInfo={formState}
              setPersonalInfo={handleChange}
              nextStep={nextStep}
            />
          )}
          {currentStep === 2 && (
            <Step2
              contactInfo={formState}
              setContactInfo={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {currentStep === 3 && (
            <Step3
              otherInfo={formState}
              setOtherInfo={handleChange}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
            />
          )}
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
};

const Step1 = ({ personalInfo, setPersonalInfo, nextStep }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl text-center my-5 font-bold">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5 mb-5">
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={(e) => setPersonalInfo("firstName", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={(e) => setPersonalInfo("lastName", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Date Of Birth:</label>
          <input
            type="date"
            name="dob"
            value={personalInfo.dob}
            onChange={(e) => setPersonalInfo("dob", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Gender:</label>
          <select
            type="text"
            name="gender"
            value={personalInfo.gender}
            onChange={(e) => setPersonalInfo("gender", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
            defaultValue={"MALE"}
          >
            <option value="MALE">male</option>
            <option value="FEMALE">female</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Marital Status:</label>
          <select
            type="text"
            name="maritalStatus"
            value={personalInfo.maritalStatus}
            onChange={(e) => setPersonalInfo("maritalStatus", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          >
            <option value="NonMarried">Non Married</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ contactInfo, setContactInfo, nextStep, prevStep }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl text-center my-5 font-bold">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5 mb-5">
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Whatsapp:</label>
          <input
            type="number"
            name="waNumber"
            value={contactInfo.waNumber}
            onChange={(e) => setContactInfo("waNumber", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={contactInfo.contactNumber}
            onChange={(e) => setContactInfo("contactNumber", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">email:</label>
          <input
            type="text"
            name="email"
            value={contactInfo.email}
            onChange={(e) => setContactInfo("email", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Address:</label>
          <input
            type="text"
            name="address"
            value={contactInfo.address}
            onChange={(e) => setContactInfo("address", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={contactInfo.city}
            onChange={(e) => setContactInfo("city", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-200 text-black px-6 py-2 rounded-md transition-colors duration-500 hover:bg-gray-300 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ otherInfo, setOtherInfo, prevStep, handleSubmit }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl text-center my-5 font-bold">Other Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5 mb-5">
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Education:</label>
          <input
            type="text"
            name="education"
            value={otherInfo.education}
            onChange={(e) => setOtherInfo("education", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Occupations:</label>
          <input
            type="text"
            name="occupation"
            value={otherInfo.occupation}
            onChange={(e) => setOtherInfo("occupation", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Reference:</label>
          <input
            type="text"
            name="reference"
            value={otherInfo.reference}
            onChange={(e) => setOtherInfo("reference", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">notes:</label>
          <input
            type="text"
            name="notes"
            value={otherInfo.notes}
            onChange={(e) => setOtherInfo("notes", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">No Of Children:</label>
          <input
            type="text"
            name="numberOfChildren"
            value={otherInfo.numberOfChildren}
            onChange={(e) => setOtherInfo("numberOfChildren", e.target.value)}
            className="w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-200 text-black px-6 py-2 rounded-md transition-colors duration-500 hover:bg-gray-300 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;

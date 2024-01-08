import React, { useState } from "react";
import { SERVER_ENDPOINT } from "../lib/server";
import Modal from "../components/ResponseModal";

const MultiStepForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
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

  const validateStep = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "waNumber",
      "dob",
      "contactNumber",
      "email",
      "address",
      "city",
      "education",
      "occupation",
      "reference",
      "notes",
    ];
    const stepErrors = {};

    requiredFields.forEach((field) => {
      if (!formState[field]) {
        stepErrors[field] = "This field is required";
      }
    });

    setErrors(stepErrors);

    return Object.keys(stepErrors).length === 0; // Return true if no errors
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isValidEmail = (email) => {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (name, value) => {
    if (name === "contactNumber" && value.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Contact number must be 10 digits",
      }));
    } else if (name === "waNumber" && value.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "whatsapp number must be 10 digits",
      }));
    } else if (name === "email" && value && !isValidEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Enter a valid email address",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
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
          console.log(error);
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
          setIsModalOpen(true);
        });
    }
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
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <Step2
              contactInfo={formState}
              setContactInfo={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <Step3
              otherInfo={formState}
              setOtherInfo={handleChange}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              errors={errors}
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

const Step1 = ({ personalInfo, setPersonalInfo, nextStep, errors }) => {
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
            placeholder="enter your first name"
            value={personalInfo.firstName}
            onChange={(e) => setPersonalInfo("firstName", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.firstName ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="enter your last name"
            value={personalInfo.lastName}
            onChange={(e) => setPersonalInfo("lastName", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.lastName ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Date Of Birth:</label>
          <input
            type="date"
            name="dob"
            value={personalInfo.dob}
            onChange={(e) => setPersonalInfo("dob", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.dob ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Gender:</label>
          <select
            type="text"
            name="gender"
            value={personalInfo.gender}
            onChange={(e) => setPersonalInfo("gender", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white `}
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
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white`}
          >
            <option value="NonMarried">Non Married</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={nextStep}
          type="button"
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ contactInfo, setContactInfo, nextStep, prevStep, errors }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl text-center my-5 font-bold">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5 mb-5">
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Whatsapp:</label>
          <input
            type="tel"
            name="waNumber"
            placeholder="9944267210"
            value={contactInfo.waNumber}
            onChange={(e) => setContactInfo("waNumber", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.waNumber ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.waNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.waNumber}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="9444267210"
            value={contactInfo.contactNumber}
            onChange={(e) => setContactInfo("contactNumber", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.contactNumber ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">email:</label>
          <input
            type="text"
            name="email"
            value={contactInfo.email}
            placeholder="xyz@example.com"
            onChange={(e) => setContactInfo("email", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white 
            ${errors.email ? "border-2 border-red-600" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Address:</label>
          <input
            type="text"
            name="address"
            placeholder="123 Main Street
            Citytown, Stateville 98765
            Countryland"
            value={contactInfo.address}
            onChange={(e) => setContactInfo("address", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.address ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">City:</label>
          <input
            type="text"
            name="city"
            placeholder="pune"
            value={contactInfo.city}
            onChange={(e) => setContactInfo("city", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.city ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          type={"button"}
          className="bg-gray-200 text-black px-6 py-2 rounded-md transition-colors duration-500 hover:bg-gray-300 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          type="button"
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ otherInfo, setOtherInfo, prevStep, handleSubmit, errors }) => {
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
            placeholder="Bachelor of Science"
            onChange={(e) => setOtherInfo("education", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.education ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.education && (
            <p className="text-red-500 text-sm mt-1">{errors.education}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Occupations:</label>
          <input
            type="text"
            name="occupation"
            value={otherInfo.occupation}
            placeholder="Teacher / Marketing Specialist / Software Engineer"
            onChange={(e) => setOtherInfo("occupation", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.occupation ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.occupation && (
            <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">Reference:</label>
          <input
            type="text"
            name="reference"
            value={otherInfo.reference}
            placeholder="friends / posters / college"
            onChange={(e) => setOtherInfo("reference", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.reference ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.reference && (
            <p className="text-red-500 text-sm mt-1">{errors.reference}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">notes:</label>
          <input
            type="text"
            name="notes"
            value={otherInfo.notes}
            onChange={(e) => setOtherInfo("notes", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white ${
              errors.notes ? "border-2 border-red-600" : ""
            }`}
          />
          {errors.notes && (
            <p className="text-red-500 text-sm mt-1">{errors.notes}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-gray-700 mb-2">No Of Children:</label>
          <input
            type="text"
            name="numberOfChildren"
            value={otherInfo.numberOfChildren}
            onChange={(e) => setOtherInfo("numberOfChildren", e.target.value)}
            className={`w-full px-4 py-1.5 border rounded-lg focus:outline-2 transition-all duration-500 outline-gray-200 focus:outline-purple-500 bg-white `}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          type={"button"}
          className="bg-gray-200 text-black px-6 py-2 rounded-md transition-colors duration-500 hover:bg-gray-300 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-orange-400 text-black px-6 py-1.5 rounded-md transition-color duration-500 hover:bg-orange-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;

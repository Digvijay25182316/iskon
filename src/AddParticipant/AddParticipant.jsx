import React, { useState } from "react";
import { motion } from "framer-motion";
import SubmitButtonForm from "../components/SubmitFormButton";

function AddParticipant() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    waNumber: "",
    contactNumber: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    services: "design", // default value
  });

  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can send the data to your backend or perform other actions
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="min-h-screen min-w-screen bg-gradient-to-r from-orange-200 via-green-200 to-purple-200 flex flex-col md:items-center justify-center text-gray-800"
    >
      <motion.h1 className="text-2xl font-bold text-blue-700 text-center my-10">
        Participants Registration
      </motion.h1>
      <div className="bg-white md:p-10 p-5 rounded-2xl m-5 shadow">
        <form
          className="flex flex-col items-center gap-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="firstName">First Name :</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="lastName">Last Name :</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="waNumber">Whatsapp Number : </label>
              <input
                type="tel"
                id="waNumber"
                name="waNumber"
                value={formData.waNumber}
                onChange={handleChange}
                placeholder="Enter your Whatsapp number"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="contactNumber">Phone:</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="dob">Date Of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Select your date of birth"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Gender:</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="services">Services:</label>
              <select
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Select your preferred service"
                className="px-4 py-1.5 text-lg rounded-md focus:outline-purple-400 text-black border border-gray-200"
              >
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
          <SubmitButtonForm
            type="submit"
            content={"Submit"}
            buttonStyles={"bg-orange-400 px-6 py-1.5 text-lg rounded-lg w-max"}
            containerStyles={"w-full flex items-center justify-center"}
          />
        </form>
      </div>
    </motion.div>
  );
}

export default AddParticipant;

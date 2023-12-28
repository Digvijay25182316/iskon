import React from "react";
import { motion } from "framer-motion";

function AddParticipant() {
  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="min-h-screen min-w-screen bg-purple-800 flex flex-col items-center justify-center text-white"
    >
      <motion.h1 className="text-2xl font-bold text-gray-300">
        Contact Information
      </motion.h1>
      <div className="bg-purple-600 md:p-10 p-5 rounded-2xl m-5">
        <form className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="waNumber">Whatsapp Number : </label>
            <input
              type="tel"
              id="waNumber"
              name="waNumber"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="contactNumber">Phone:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="dob">Date Of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              className="px-4 py-1.5 text-lg rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="services">Services:</label>
            <select
              id="services"
              name="services"
              className="px-4 py-1.5 text-lg rounded-md"
            >
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </motion.div>
  );
}

export default AddParticipant;

import React, { useState } from "react";
import SubmitButtonForms from "../../components/SubmitFormButton";

function AddProgram() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    incharge: "",
    preacher: "",
    coordinator: "",
    audienceType: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-screen pt-32 md:pt-0 md:p-5 p-3 h-full">
      <div className="md:flex items-center justify-between w-full pl-16 hidden py-5">
        <p className="text-2xl font-bold text-gray-700 pl-10 md:pl-0">
          Add programs
        </p>
      </div>
      <p className="block md:hidden text-2xl font-bold text-gray-700 ml-10 pb-5">
        Add program
      </p>
      <div className="md:pl-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-xl shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.keys(formData).map((key) => (
              <div key={key} className="flex flex-col gap-3">
                <label
                  htmlFor={key}
                  className={`font-semibold ml-2 text-stone-800`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${key}`}
                  className={`px-4 py-1.5 border rounded-md focus:outline-none bg-white text-stone-900 border-stone-300`}
                />
              </div>
            ))}
          </div>
          <SubmitButtonForms
            containerStyles="flex items-center justify-center mt-10"
            buttonStyles={`text-lg px-4 py-1 bg-blue-200 rounded-md text-black`}
            isLoading={false}
            content="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default AddProgram;

import React, { useState } from "react";
import axios from "axios";

const AddStudent = ({ fetchStudents }) => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    name: "",
    branch: "",
    year: "",
    totalMarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormReset = () => {
    setFormData({
      registrationNumber: "",
      name: "",
      branch: "",
      year: "",
      totalMarks: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to the API
      await axios.post("http://localhost:5001/students", formData);
      // Call the function to refresh the student list
      fetchStudents();
      // Reset the form after successful submission
      handleFormReset();
      // You could add a success notification here
      console.log("Student added successfully!");
    } catch (error) {
      console.error("Error adding student", error);
      // You could add an error notification here
    }
  };

  const formFields = [
    { label: "Registration Number", name: "registrationNumber", type: "text" },
    { label: "Name", name: "name", type: "text" },
    { label: "Branch", name: "branch", type: "text" },
    { label: "Year", name: "year", type: "number" },
    { label: "Total Marks", name: "totalMarks", type: "number" },
  ];

  return (
    <div className="flex justify-center p-4 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg lg:max-w-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-3 border-indigo-200 dark:border-indigo-700">
          ➕ Add Student Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields.map((field) => (
              <div className="flex flex-col space-y-1" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition duration-150 ease-in-out placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label}`}
                  required // Added required for basic validation
                  min={field.type === 'number' ? 0 : undefined} // Added min for number fields
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
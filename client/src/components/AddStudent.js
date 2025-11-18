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
    const updatedValue = (name === 'year' || name === 'totalMarks') ? Number(value) : value;
    setFormData({ ...formData, [name]: updatedValue });
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
      await axios.post("http://localhost:5001/students", formData);
      fetchStudents();
      handleFormReset();
      console.log("Student added successfully!");
    } catch (error) {
      console.error("Error adding student", error);
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
    <div className="flex justify-center p-4 min-h-screen bg-gray-50 dark:bg-gray-900 w-full">
      <div className="w-full max-w-lg lg:max-w-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-indigo-100 dark:border-gray-700">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400 border-b pb-3 border-indigo-100 dark:border-indigo-700">
          ➕ Add Student Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
            {formFields.map((field) => (
              <div className="flex flex-col space-y-2" key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition duration-150 ease-in-out placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label}`}
                  required 
                  min={field.type === 'number' ? 0 : undefined} 
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-6 pt-8 mt-6 border-t border-gray-200 dark:border-gray-700">
            
            <button
              type="button"
              onClick={handleFormReset}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-blue-500 dark:bg-blue-700 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md hover:shadow-lg m-2"
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-blue-600 dark:bg-blue-800 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md hover:shadow-lg m-2"
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
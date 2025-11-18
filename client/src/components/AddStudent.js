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
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring
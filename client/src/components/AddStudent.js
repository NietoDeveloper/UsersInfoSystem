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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/students", formData);
      fetchStudents();
    } catch (error) {
      console.error("Error adding student", error);
    }
  };

  const formGroupStyle = { marginBottom: "10px" };

  return (
    <div className="container mt-5">
      <h2 style={{ marginBottom: "25px" }}>Add Student Details</h2>
      <form onSubmit={handleSubmit}>
        {["Registration Number", "Name", "Branch", "Year", "Total Marks"].map(
          (label, index) => (
            <div className="form-group" key={index} style={formGroupStyle}>
              <label style={formGroupStyle}>{label}</label>
              <input
                style={formGroupStyle}
                type={
                  label === "Year" || label === "Total Marks"
                    ? "number"
                    : "text"
                }
                className="form-control"
                name={label.toLowerCase().replace(" ", "")}
                value={formData[label.toLowerCase().replace(" ", "")]}
                onChange={handleChange}
                placeholder={label}
              />
            </div>
          )
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;

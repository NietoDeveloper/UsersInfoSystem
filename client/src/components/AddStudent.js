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
    // Convierte 'year' y 'totalMarks' a números para el estado
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
      // POST request to the API
      await axios.post("http://localhost:5001/students", formData);
      // Call the function to refresh the student list
      fetchStudents();
      // Reset the form after successful submission
      handleFormReset();
      console.log("Student added successfully!");
    } catch (error) {
      console.error("Error adding student", error);
      // Aquí podrías mostrar un mensaje de error al usuario
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
    // Contenedor principal: Centrado, con padding y fondo, cubre el alto mínimo de la pantalla.
    <div className="flex justify-center p-4 min-h-screen bg-gray-50 dark:bg-gray-900 w-full">
      <div className="w-full max-w-lg lg:max-w-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-indigo-100 dark:border-gray-700">
        
        {/* Título claro y separado */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400 border-b pb-3 border-indigo-100 dark:border-indigo-700">
          ➕ Add Student Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid responsivo con espaciado aumentado (gap-y-6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
            {formFields.map((field) => (
              <div className="flex flex-col space-y-2" key={field.name}>
                {/* Etiqueta con buen espaciado */}
                <label
                  htmlFor={field.name}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                </label>
                {/* Input estilizado con foco índigo y Dark Mode */}
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

          {/* Contenedor de botones: Espaciado claro (pt-6), responsivo y con botones separados (space-x-4) */}
          <div className="flex flex-col-reverse sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            
            {/* Botón secundario: Limpiar formulario */}
            <button
              type="button"
              onClick={handleFormReset}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md"
            >
              Clear Form
            </button>
            
            {/* Botón principal: Add Student con hover azul/índigo */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
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
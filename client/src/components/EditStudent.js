import React, { useState } from 'react';
import axios from 'axios';

const EditStudent = ({ student, stopEditing, fetchStudents }) => {
  // Inicializa el estado del formulario con los datos del estudiante que se está editando.
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convierte 'year' y 'totalMarks' a números inmediatamente, ya que son de tipo 'number'.
    const updatedValue = (name === 'year' || name === 'totalMarks') ? Number(value) : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía la solicitud PUT a la API usando el _id del estudiante para la URL.
      await axios.put(`http://localhost:5001/students/${student._id}`, formData);
      
      // Detiene el modo de edición (posiblemente cierra el formulario o modal).
      stopEditing();
      
      // Llama a fetchStudents si está disponible para actualizar la lista de la vista principal.
      // Asegúrate de que este prop se pase desde el componente padre si se necesita refrescar la lista.
      if (fetchStudents) {
          fetchStudents();
      }
      
      console.log('Student updated successfully!');
      
    } catch (error) {
      console.error('Error updating student', error);
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
    <div className="flex justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-indigo-100 dark:border-gray-700">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400 border-b pb-3 border-indigo-100 dark:border-indigo-700">
          📝 Edit Student Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {formFields.map((field) => (
              <div className="flex flex-col space-y-1" key={field.name}>
                
                {/* Etiqueta */}
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                </label>
                
                {/* Input */}
                <input
                  id={field.name}
                  type={field.type}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition duration-150 ease-in-out placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter new ${field.label}`}
                  required
                  disabled={field.name === 'registrationNumber'} 
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            
            <button
              type="button"
              onClick={stopEditing}
              className="w-full md:w-auto px-6 py-3 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
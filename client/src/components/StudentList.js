import React, { useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

const StudentList = ({ students, fetchStudents }) => {
  const [editingStudent, setEditingStudent] = useState(null);

  const deleteStudent = async (id) => {
    // Confirmación simple antes de eliminar (opcional, pero buena práctica)
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:5001/students/${id}`);
        fetchStudents();
        console.log(`Student with ID ${id} deleted.`);
      } catch (error) {
        console.error('Error deleting student', error);
      }
    }
  };

  const startEditing = (student) => {
    setEditingStudent(student);
  };

  const stopEditing = () => {
    setEditingStudent(null);
    fetchStudents();
  };

  // Define las cabeceras de la tabla
  const headers = [
    "Registration Number", "Name", "Branch", "Year", "Total Marks", "Actions"
  ];

  if (editingStudent) {
    // Si hay un estudiante en modo de edición, muestra el formulario de edición
    // Esto se renderiza con los estilos ya aplicados en el componente EditStudent refactorizado
    return (
      <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <EditStudent 
          student={editingStudent} 
          stopEditing={stopEditing} 
          fetchStudents={fetchStudents}
        />
      </div>
    );
  }

  // Renderizado de la lista de estudiantes
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-[1800px]">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 md:mb-8 border-b pb-2 border-indigo-200 dark:border-gray-700">
        📚 Student List
      </h2>

      {students.length === 0 ? (
        <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No student records found. Please add a new student.
          </p>
        </div>
      ) : (
        <>
          {/* --- Vista de Tarjeta Responsive (móvil: 320px - 767px) --- */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {students.map((student) => (
              <div 
                key={student._id} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-indigo-500 space-y-2"
              >
                {/* Mapeo de los datos en formato etiqueta: valor */}
                <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    Registration No: <span className="text-gray-900 dark:text-white font-semibold block">{student.registrationNumber}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    Name: <span className="text-gray-900 dark:text-white font-semibold block">{student.name}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    Branch: <span className="text-gray-900 dark:text-white font-semibold block">{student.branch}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    Year: <span className="text-gray-900 dark:text-white font-semibold block">{student.year}</span>
                </div>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    Total Marks: <span className="text-gray-900 dark:text-white font-semibold block">{student.totalMarks}</span>
                </div>
                
                {/* Botones para la vista de tarjeta */}
                <div className="flex justify-end pt-3 space-x-3">
                  <button
                    onClick={() => startEditing(student)}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition duration-150 shadow-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-150 shadow-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* --- Vista de Tabla Estándar (md: 768px y superior) --- */}
          <div className="hidden md:block overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {headers.map((header) => (
                    <th 
                      key={header} 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {students.map((student) => (
                  <tr 
                    key={student._id} 
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{student.registrationNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{student.branch}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{student.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{student.totalMarks}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                      <button
                        onClick={() => startEditing(student)}
                        className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteStudent(student._id)}
                        className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentList;
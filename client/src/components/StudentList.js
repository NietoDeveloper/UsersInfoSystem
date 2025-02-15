import React, { useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

const StudentList = ({ students, fetchStudents }) => {
  const [editingStudent, setEditingStudent] = useState(null);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  const startEditing = (student) => {
    setEditingStudent(student);
  };

  const stopEditing = () => {
    setEditingStudent(null);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Registration Number</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Total Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.registrationNumber}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td>{student.totalMarks}</td>
              <td>
                <button className="btn btn-primary mr-2" onClick={() => startEditing(student)} style={{ marginRight: '10px' }}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingStudent && <EditStudent student={editingStudent} stopEditing={stopEditing} />}
    </div>
  );
};

export default StudentList;

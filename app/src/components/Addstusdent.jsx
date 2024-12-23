import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Addstudent({ isOpen, closeModal, handleAddItem }) {
    const [studentName, setStudentName] = useState('');


  const [cohort, setCohort] = useState('');
  const [courses, setCourses] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newItem = {

      student_name: studentName,
      cohort: cohort,
      courses: courses,
      date_joined: new Date().toISOString(),
      last_login: new Date().toISOString(),
      status: status,
    };
    handleAddItem(newItem);
    closeModal(); 
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <div className="mb-4">
          <label className="block mb-2">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Cohort</label>
      
        
          <select
            value={cohort}
            onChange={(e) =>  setCohort(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="AY2024-25">AY 2024-25</option>
            <option value="AY2024-25">AY 2025-26</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Courses</label>
          <textarea
        value={courses}
            onChange={(e) => setCourses(e.target.value)}
          className="w-full px-4 py-2 border rounded"
      rows={4}
      placeholder="Write each course on a new line"
/>

        </div>
        <div className="mb-4">
          <label className="block mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Addstudent
import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 h-screen ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-users text-gray-500 text-3xl"></i>
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold text-lg">Total Students</h2>
              <p className="text-gray-500">1,245</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-book text-gray-500 text-3xl"></i>
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold text-lg">Courses</h2>
              <p className="text-gray-500">85</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-chart-line text-gray-500 text-3xl"></i>
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold text-lg">Performance</h2>
              <p className="text-gray-500">87%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-calendar-alt text-gray-500 text-3xl"></i>
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold text-lg">Upcoming Events</h2>
              <p className="text-gray-500">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-cog text-gray-500 text-3xl"></i>
            <div className="ml-4">
              <h2 className="text-gray-700 font-semibold text-lg">Settings</h2>
              <p className="text-gray-500">Customize</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



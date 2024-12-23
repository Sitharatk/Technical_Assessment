import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchItems ,createItem } from '../components/Operation';  
import Addstudent from './Addstusdent';

function Card() {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedCohort, setSelectedCohort] = useState("");
    const items = useSelector((state) => state.items.items);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchItems());
    }, [dispatch]);
  
    const handleAddItem = (newItem) => {
      dispatch(createItem(newItem)); 
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className="w-full h-auto bg-gray-100">
    <div className="w-auto h-auto bg-white m-3 p-3 rounded">
      <div className="flex flex-wrap justify-between items-center mb-4">
      <div className="flex gap-4 flex-wrap">
                        <select
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            className="bg-gray-200 font-medium text-black rounded px-4 py-2 outline-none w-full sm:w-auto"
                        >
                            <option value="" disabled>
                                AY 2024-25
                            </option>
                            <option value="option1">AY 2024-25</option>
                            
                        </select>

                        <select
                            value={selectedCohort}
                            onChange={(e) => setSelectedCohort(e.target.value)}
                            className="bg-gray-200 font-medium text-black rounded px-4 py-2 outline-none w-full sm:w-auto"
                        >
                            <option value="" disabled>
                                CBSE 9
                            </option>
                            <option value="option1">CBSE 9</option>
                            <option value="option2">CBSE 8</option>
                           
                        </select>
                    </div>

        <button
          className="bg-gray-200 font-medium text-black px-4 py-2 rounded shadow mt-4 sm:mt-0"
          onClick={openModal}
        >
          + Add New Student
        </button>
      </div>

    
      <div className="overflow-x-auto mt-8">
        <table className="w-full table-auto text-left text-black">
          <thead className="bg-white">
            <tr className="border-b">
              <th className="py-2 px-4">Student Name</th>
              <th className="py-2 px-4">Cohort</th>
              <th className="py-2 px-4">Courses</th>
              <th className="py-2 px-4">Date Joined</th>
              <th className="py-2 px-4">Last Login</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{item.student_name}</td>
                  <td className="py-2 px-4">{item.cohort}</td>
                  <td className="py-2 px-4">
                    <div className="flex gap-2 flex-wrap">
                    {item.courses.split('\n').map((course, index) => (
  <div key={index} className="border-2 px-4 py-2 rounded bg-gray-200">
    <div className="flex items-center gap-2">
      <img
        src={
          course.toLowerCase().includes("science")
            ? "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D"
            : course.toLowerCase().includes("maths")
            ? "https://media.istockphoto.com/id/2045189569/photo/portrait-of-indian-young-woman-wearing-casual-kurta-on-white-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=4Xnw99ovfFgR1fMGEQoxOiIwH2V1dLpfZs0_A_QnfFA="
            : "https://media.istockphoto.com/id/1376131442/photo/teacher-with-students-around-explaining-or-teaching-from-book-on-classroom-concept-of-support.webp?a=1&b=1&s=612x612&w=0&k=20&c=U-M1exQWSVB4XQPCWJr2UjaAKe0Nl-OE45GiQWk1pnc="
        }
        alt="icon"
        className="w-5 h-5 object-contain rounded-md"
      />
      <span>{course}</span>
    </div>
  </div>
))}

                    </div>
                  </td>
                  <td className="py-2 px-4">{item.date_joined}</td>
                  <td className="py-2 px-4">{item.last_login}</td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <p
                      className={`h-2 w-2 rounded-full p-2 ml-4 mt-3 ${
                        item.status === "Active" ? "bg-green-500" : "bg-red-400"
                      }`}
                    ></p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    <Addstudent isOpen={isModalOpen} closeModal={closeModal} handleAddItem={handleAddItem} />
  </div>
  )
}

export default Card
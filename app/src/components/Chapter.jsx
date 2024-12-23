import React from 'react'

function Chapter() {

const chapters = [
    {
      id: 1,
      title: 'Fundamentals of Algebra',
      description: 'Understand basic algebraic operations, equations, and problem-solving techniques.',
     
    },
    {
      id: 2,
      title: 'Laws of Motion',
      description: 'Explore Newton’s Laws of Motion and their applications in everyday life.',
  
    },
    {
      id: 3,
      title: 'Introduction to Geometry',
      description: 'Learn about shapes, angles, and theorems essential for understanding geometry.',
     
    },{
    id: 5,
    title: 'Probability and Statistics',
    description: 'Learn the basics of probability, data interpretation, and statistical analysis.',
    pageNumber: 45,
  },
  {
    id: 6,
    title: 'Thermodynamics',
    description: 'Dive into the principles of energy, heat transfer, and the laws of thermodynamics.',
    pageNumber: 55,
  },
{
    id: 5,
    title: 'Probability and Statistics',
    description: 'Learn the basics of probability, data interpretation, and statistical analysis.',

  },
  {
    id: 6,
    title: 'Thermodynamics',
    description: 'Dive into the principles of energy, heat transfer, and the laws of thermodynamics.',

  },
];
  
  

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Chapters</h1>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            className="p-4 border border-gray-200 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800">{chapter.title}</h2>
            <p className="text-gray-600 mt-1">{chapter.description}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chapter

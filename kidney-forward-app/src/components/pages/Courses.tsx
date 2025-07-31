import React from 'react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Understanding Kidney Disease",
      duration: "4 weeks",
      level: "Beginner",
      description: "Comprehensive introduction to kidney disease, symptoms, and treatment options."
    },
    {
      title: "Living with Dialysis",
      duration: "3 weeks",
      level: "Intermediate",
      description: "Managing daily life while on dialysis, including diet and lifestyle adjustments."
    },
    {
      title: "Transplant Preparation",
      duration: "6 weeks",
      level: "Intermediate",
      description: "Everything you need to know about preparing for a kidney transplant."
    },
    {
      title: "Nutrition for Kidney Health",
      duration: "2 weeks",
      level: "Beginner",
      description: "Learn about kidney-friendly diets and meal planning."
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Educational Courses</h1>
        
        <p className="text-lg mb-8">
          Expand your knowledge with our comprehensive courses designed for patients,
          caregivers, and healthcare professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex space-x-4 text-sm text-gray-600 mb-3">
                <span>Duration: {course.duration}</span>
                <span>"</span>
                <span>Level: {course.level}</span>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Continuing Education Credits</h2>
          <p className="text-gray-700">
            Healthcare professionals can earn CME credits through our accredited courses.
            All courses are developed by leading experts in nephrology and transplant medicine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
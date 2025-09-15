import React from 'react'; 
import { useEffect, useState } from "react";
import { fetchCourses } from "../services/api";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetchCourses();
      
        setCourses(response.data || response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  if (loading) return <p>Carregando cursos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container mx-auto px-6 md:px-8 py-6" id="courses">
        <h2 className="text-2xl font-bold mb-4">Cursos</h2>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
            {courses.map((course) => (
            <div
                key={course.id}
                className="bg-[#17254D] text-white
                flex-shrink-0
                w-[calc(100%-1rem)]        /* Mobile: 1 card + parte do próximo */
                sm:w-[calc(50%-1rem)]      /* Tablet 768px: 2 cards + parte do 3º */
                lg:w-[calc(25%-1rem)]      /* Desktop: 4 cards */
                snap-start
                border rounded-s shadow p-4 hover:shadow-lg transition
                "
            >
               
                {course.image_url ? (
                <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded mb-2"
                />
                ) : (
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded mb-4">
                    <span className="text-gray-600">Sem imagem</span>
                </div>
                )}

                {/* Categorias */}
                <div className="flex flex-wrap gap-2 mb-4">
                {course.categories?.map((cat, index) => (
                    <span
                    key={index}
                    className="border border-white text-blue-100 px-3 py-1 rounded text-sm font-medium">
                    {cat}
                    </span>
                ))}
                </div>

                
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>

                <p className="text-sm text-gray-500">
                <strong>Por:</strong> {course.author}
                </p>
            </div>
            ))}
        </div>
    </section>
  );
}

export default CourseList;

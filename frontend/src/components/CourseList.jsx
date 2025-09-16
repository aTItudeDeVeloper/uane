import React, { useEffect, useState, useRef } from "react";
import { fetchCourses } from "../services/api";
import { VscDebugStart } from "react-icons/vsc";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p>Carregando cursos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container mx-auto px-6 md:px-8 py-6 relative" id="courses">
      <h2 className="text-2xl font-bold mb-4 font-Noto text-[32px]">Cursos</h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="
                bg-[#17254D] text-white font-Noto
                flex-shrink-0
                w-[85%]          
                sm:w-1/2         
                lg:w-1/4        
                snap-start
                border rounded shadow p-4 hover:shadow-lg transition
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
                  <span className="text-gray-600 font-Noto">Sem imagem</span>
                </div>
              )}

            
              <div className="flex flex-nowrap gap-1 mb-3 overflow-hidden">
                {course.categories?.map((cat, index) => (
                  <span
                    key={index}
                    className="
                      border border-white/60
                      text-blue-100 font-Noto
                      px-1.5 py-0.5 
                      rounded 
                      text-[10px] 
                      font-normal 
                      whitespace-nowrap
                    "
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-1 font-bold font-Noto">{course.title}</h3>

              <p className="text-sm text-gray-300">
                <strong>Por:</strong> {course.author}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-gray-700 shadow rounded-full p-2 hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white text-gray-700 shadow rounded-full p-2 hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default CourseList;

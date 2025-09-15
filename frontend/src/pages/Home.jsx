import React from 'react'; 
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CourseList from "../components/CourseList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CourseList />
      <Footer />
    </>
  );
}

export default Home;

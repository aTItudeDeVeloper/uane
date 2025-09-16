import React from 'react'; 
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CourseList from "../components/CourseList";
import Footer from "../components/Footer";
import Statistics from '../components/Statistics';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Statistics />
      <CourseList />
      <Footer />
    </>
  );
}

export default Home;

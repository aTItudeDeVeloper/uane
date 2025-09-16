import React from 'react'; 
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CourseList from "../components/CourseList";
import Footer from "../components/Footer";
import Statistics from '../components/Statistics';
import InformationToDecide from '../components/InformationToDecide';
import WhatYouWillLearn from '../components/WhatYouWillLearn';
import Investment from '../components/Investment';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Statistics />
      <InformationToDecide />
      <WhatYouWillLearn />
      <CourseList />
      <Investment />
      <Footer />
    </>
  );
}

export default Home;

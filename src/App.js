
import './App.css';
import Heroa from './Components/Hero/Heroa';
import { Navbar } from './Components/Navbar/Navbar';
import React from 'react';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Router1 from './Router1';
import Education from './Components/Education/Education';





function App() {
  
  return (
    <>
    <Navbar/>
    
    
    <div className="Container">
      <Heroa/>
      <Skills/>
      {/* <Education/> */}
      <WorkExperience/>
      <ContactMe/>
   
      

      
    </div>
    <Footer/>

    </>
    
  );
}

export default App;

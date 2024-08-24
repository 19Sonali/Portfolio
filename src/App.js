
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
import {MantineProvider } from '@mantine/core';
import Projects from './Components/Projects/Projects';





function App() {
  
  return (
    <>
    <Navbar/>
    
    
    <div className="Container">
      <Heroa/>
      <Skills/>
      <MantineProvider>
      <Education/>
      </MantineProvider>
      <WorkExperience/>
      <Projects/>
      <ContactMe/>
   
      

      
    </div>
    <Footer/>

    </>
    
  );
}

export default App;

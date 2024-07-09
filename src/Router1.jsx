import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Heroa from './Components/Hero/Heroa'
import Skills from './Components/Skills/Skills'
import WorkExperience from './Components/WorkExperience/WorkExperience'

const NotFound = () => {
    return(
      <div>
        <h1>Error 404</h1>
        <p>The page does not exist</p>
      </div>
    )
  }

const Router1 = () => {
  return (
    <div>
        <BrowserRouter>
    <Routes>
        <Route exact path='/Home' element={<Heroa/>}  />
        <Route exact path='/Skills' element={<Skills/>}/>
        <Route exact path='/Internships' element={<WorkExperience/>}/>

        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router1
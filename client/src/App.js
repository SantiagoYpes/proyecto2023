import React from 'react'
import {Routes, Route} from "react-router-dom";
import {Homepage, NotFoundPage, NewTeacherForm} from "./pages";
import {TeacherProvider} from "./context/TeacherContext";
function App() {
  return (
    <TeacherProvider>
      <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/newTeacher' element={<NewTeacherForm />}/>
      <Route path='/notFound' element={<NotFoundPage />}/>
    </Routes>
    </TeacherProvider>
  )
}

export default App
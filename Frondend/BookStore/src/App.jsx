import React from 'react';
import HomeComponents from './HomePages/HomeComponents';
import { Route, Routes, Navigate } from "react-router-dom";
import Courses from './CourseComponent/Courses';
import SignUp from './Components/SignUp';
import ContactComp from './Contact/ContactComp';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white' >
      <Routes>
      <Route path='/' element={<HomeComponents/>} />
      <Route path='/course' element={authUser ? <Courses/> : <Navigate to='/signup' />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/contact' element={<ContactComp/>} />
    </Routes>
       <Toaster />
    </div>


    </>
  )
}

export default App;

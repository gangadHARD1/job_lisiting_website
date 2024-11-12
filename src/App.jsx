import React from 'react'

import HomePage from './pages/HomePage'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider
} from 'react-router-dom'
 import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import ErrorPage from './pages/ErrorPage';
import Job_expanded, {jobLoader} from './pages/job_expanded';
 
{/* index element means its goonna be the home page so nop need ot specify path*/}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MainLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/jobs/:id' element={<Job_expanded/>} loader={jobLoader}/>   {/* the colon after jobs/ signifies this is dynamic*/}
    <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
);

const App = () => {
  return (
   <RouterProvider router= {router}/>
  );
}

export default App ;
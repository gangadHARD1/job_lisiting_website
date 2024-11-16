import React from 'react'

import HomePage from './pages/HomePage'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider
} from 'react-router-dom'
 import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import ErrorPage from './pages/ErrorPage';
import Job_expanded, {jobLoader} from './pages/job_expanded';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
{/* index element means its goonna be the home page so nop need ot specify path*/}



const App = () => {
  const addJob =async(newJob)=>{

    const res=await fetch ('/api/jobs',{method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(newJob)
    })
    return 
  }

  //for deleting job
  const delJob= async (id)=> {
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    })

  }
  //updatejob
  const editJob=async(job)=>{
    const res=await fetch (`/api/jobs/${job.id}`,{
      method:"PUT",
      headers:{'Content-Type':'application/json',
      },
      body:JSON.stringify(job)})
      return 
    }
       

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<Job_expanded deleteJob={delJob}/>} loader={jobLoader}/>   {/* the colon after jobs/ signifies this is dynamic ALSO LOADER IS NOT A PROP!!*/}
      <Route path='*' element={<ErrorPage/>}/>
      <Route path='/edit-job/:id' element={<EditJobPage editJob={editJob}/>} loader={jobLoader}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      </Route>
    )
  );

  return (
   <RouterProvider router= {router}/>
  );
}

export default App ;
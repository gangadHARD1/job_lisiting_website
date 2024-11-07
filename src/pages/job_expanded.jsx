import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner'

const Job_expanded = () => {
  const [Job,setJob]=useState(null)
  const {id} =useParams()
  const [Loading,setLoading]=useState(true)

  useEffect(()=>{const fetchjob = async ()=>{

    try {
        
        const res=await fetch(`/api/jobs/${id}`);
        const data=await res.json();
        setJob(data);
        console.log(data)
        
      } catch (error) {
        console.log("error fetching data",error)
        
      }
      finally{
        setLoading(false)
      }
      
    } 
    fetchjob()
  },[])
  return (
    <section className="bg-blue-50 px-4 py-10">
      {Loading? <Spinner/>: <h1>
        
        
        {Job.title}
        
        </h1>}
        



    </section>
  )
}


export default Job_expanded
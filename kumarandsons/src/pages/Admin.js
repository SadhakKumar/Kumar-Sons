import React, { useState } from 'react'
import'./admin.css'
import axios from 'axios';

function Admin() {

  const [job,setjob] = useState({
    jobid:"",
    title:"",
    location:"",
    lowerboundsalary:"",
    upperboundsalary:"",
    type:"",
    qualifications:"",
    description:""
  })

  const handlechange = (e) =>{
    const {name,value} = e.target;

    setjob({
      ...job,
      [name]:value
    })
  }

  const post = () =>{
    const {title,location,lowerboundsalary,upperboundsalary,type,qualifications,description} = job

    axios.post("http://localhost:8000/admin",job)
    .then(res =>{
      alert(res.data.message)
    })
  }

  return (
    <div>
      {console.log(job)}
      <div className='parent-container'>
        <div className='container'>
            <input type="number" placeholder='Job Id' name='jobid' value={job.jobid} onChange={handlechange}/>
            <input type="text" placeholder='Title' name='title' value={job.title} onChange={handlechange}/>
            <input type="text" placeholder='Location' name='location' value={job.location} onChange={handlechange}/>
            <input type="number" placeholder='Lower Bound Salary' name='lowerboundsalary' value={job.lowerboundsalary} onChange={handlechange}/>
            <input type="number" placeholder='Upper Bound Salary' name='upperboundsalary' value={job.upperboundsalary} onChange={handlechange}/>
            <input type="text" placeholder='Type' name='type' value={job.type} onChange={handlechange}/>
            <input type="text" placeholder='Qualifications' name='qualifications' value={job.qualifications} onChange={handlechange}/>
            <input type="text" placeholder='Job Description' name='description' value={job.description} onChange={handlechange}/>
            
            <button type="button" className="btn btn-primary" onClick={post}>Post Job</button>
          
            </div>
        </div>
    </div>
  )
}

export default Admin
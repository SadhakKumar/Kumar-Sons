import React from 'react'
import './jobs.css'

function Jobs(props) {
  return (
    <div className='parentcontainer'> 
      {props.jobs.map((job,index)=>{
        return(
          <div className="card" style={{width: "18rem"}}>
      
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">{job.location}</p>
            <p className="card-text">Salary: {job.lowerboundsalary} - {job.upperboundsalary}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {job.type}</li>
            <li className="list-group-item">Qualifications: {job.qualifications}</li>
            <li className="list-group-item">Description: {job.description}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Apply Now!</a>
            
          </div>
          </div>
        )
      })}
      
    </div>
  )
}

export default Jobs

import React, { useState } from 'react'
import './jobs.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import MovingIcon from '@mui/icons-material/Moving';
import HouseIcon from '@mui/icons-material/House';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';


function Jobs(props) {
  const navigate = useNavigate();


  const [currjob,setcurrjob] = useState();

  const apply  = (job) =>{
    if(props.user.name === 'Login'){
      navigate('/login')
      
    }else{
      axios.post('http://localhost:8000/job',{job: job,user: props.user})
      .then(res=>{
        alert(res.data.message)
      })
      console.log(job);
    }
    
    
    
  }
  return (
    <div className='parentcontainer'> 
      {props.jobs.map((job,index)=>{
        
        return(
          <div className='jobcontainer'>
            <div className='Activelyhiring'>
              <MovingIcon fontSize='small'/>
              Actively hiring
            </div>
            <div className='title'>
              <p className='jobtitle'>{job.title}</p>
              <p className='joblocation'><LocationOnOutlinedIcon fontSize='small'/>{job.location}</p>
            </div>

            <div className='workfromhome'>
              <HomeOutlinedIcon fontSize='small'/>
              Work From Home
            </div>
            <div className='jobdetails'> 
              <div className='jobqualification'>
                  <div className='qualiwithicon'>
                    <PlayCircleFilledWhiteOutlinedIcon fontSize='small' color="disabled"/>
                    <p className='Qualificationstext'>START DATE</p>
                  </div>
                  <p className='jobquali'>Immediately</p>
                </div> 
                <div className='jobqualification'>
                  <div className='qualiwithicon'>
                    <AutoStoriesOutlinedIcon fontSize='small' color="disabled"/>
                    <p className='Qualificationstext'>Qualifications</p>
                  </div>
                  <p className='jobquali'>{job.qualifications}</p>
                </div>

                <div className='jobqualification'>
                  <div className='qualiwithicon'>
                    <LocalAtmOutlinedIcon fontSize='small' color="disabled"/>
                    <p className='Qualificationstext'>Salary</p>
                  </div>
                  <p className='jobquali'>₹ {job.lowerboundsalary}-{job.upperboundsalary}/month</p>
                </div>
                
            </div>
            <div className='jobdetails2'>
              <div className='jobpostedtime'>
                <p className='timetext'><UpdateOutlinedIcon sx={{ fontSize: 14, color: 'green'}}/>Just now</p>
              </div>
              <div className='jobtype'>
                  <p className='jobtypetext'>{job.type}</p>
              </div>

            </div>
            <hr className='line' />
            <button type="button" class="btn btn-primary" onClick={() => apply(job)}>Apply</button>
            

          </div>
        )
      })}
      
    </div>
  )
}

export default Jobs

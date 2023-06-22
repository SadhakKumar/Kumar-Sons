import React, { useEffect, useState } from 'react'
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
    
      {props.jobs.filter((items)=>{
        return props.category === '' ? props.jobs : items.title.toLowerCase().includes(props.category.toLowerCase())
      }).filter((items) =>{
        return props.stipend === '' ? items : items.lowerboundsalary >= props.stipend
      }).filter((items) =>{
        return (props.workFromHome === false && props.internship === false || props.workFromHome === true && props.internship === true) ? items : (props.workFromHome === false && props.internship === true ? items.type === 'Internship' : items.type === 'Full Time')  
      })
      .map((items,index)=>{
        
        return(
          <div className='jobcontainer'>
            <div className='Activelyhiring'>
              <MovingIcon fontSize='small'/>
              Actively hiring
            </div>
            <div className='title'>
              <p className='jobtitle'>{items.title}</p>
              <p className='joblocation'><LocationOnOutlinedIcon fontSize='small'/>{items.location}</p>
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
                  <p className='jobquali'>{items.qualifications}</p>
                </div>

                <div className='jobqualification'>
                  <div className='qualiwithicon'>
                    <LocalAtmOutlinedIcon fontSize='small' color="disabled"/>
                    <p className='Qualificationstext'>Salary</p>
                  </div>
                  <p className='jobquali'>₹ {items.lowerboundsalary}-{items.upperboundsalary}/month</p>
                </div>
                
            </div>
            <div className='jobdetails2'>
              <div className='jobpostedtime'>
                <p className='timetext'><UpdateOutlinedIcon sx={{ fontSize: 14, color: 'green'}}/>Just now</p>
              </div>
              <div className='jobtype'>
                  <p className='jobtypetext'>{items.type}</p>
              </div>

            </div>
            <hr className='line' />
            <button type="button" className="btn btn-primary" onClick={() => apply(items)}>Apply</button>
            

          </div>
        )
      })}
      
    </div>
  )
}

export default Jobs

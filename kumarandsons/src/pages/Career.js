import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Jobs from '../components/Jobs'
import axios from 'axios'
import Filtertab from '../components/Filtertab'
import './careers.css'


export default function Career(props) {
    const [jobs, setjob] = useState([])

    const getJob = () =>{
        axios.get("http://localhost:8000/career")
        .then(res =>{
            setjob(res.data)
            console.log(res.data)
        })  
        .catch((err) =>{
          if(err){
            console.log(err);
          }
        })
    }
  
    useEffect(() => {
        getJob();
      }, []);
      

  return (
    <div>
        <Navbar user = {props.user.name}/>
        <div className='careercontainer'>
          <div>
            <Filtertab/>
          </div>
          
            <Jobs jobs = {jobs} user = {props.user}/>
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Jobs from '../components/Jobs'
import axios from 'axios'
import Filtertab from '../components/Filtertab'
import './careers.css'


export default function Career(props) {
  const [jobs, setjob] = useState([])
  const [category, setCategory] = useState('');
  const [stipend, setStipend] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [internship, setInternship] = useState(false);

  const getCategory = (category) => {
    setCategory(category);
    console.log(category);
  }
  const getStipend = (stipend) => {
    setStipend(stipend);
    console.log("stipend: ", stipend);
  }
  const getWorkFromHome = (workFromHome) => {
    setWorkFromHome(workFromHome);
    console.log("workFromHome: ", workFromHome);
  }
  const getInternship = (Internship) => {
    setInternship(Internship);
    console.log("Internship: ", Internship);
  }


  const getJob = () => {
    axios.get("http://localhost:8000/career")
      .then(res => {

        setjob(res.data);
        // setjob(category.toLowerCase() === '' ? res.data : res.data.title.toLowerCase().includes(category))
        console.log(res.data)
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
  }

  useEffect(() => {
    getJob();
  }, []);


  return (
    <div>
      <Navbar user={props.user.name} />
      <div className='careercontainer'>
        <div>
          <Filtertab onChange={getCategory} stipend={getStipend} workFromHome={getWorkFromHome} internship={getInternship} />
        </div>

        <Jobs jobs={jobs} user={props.user} category={category} stipend={stipend} workFromHome={workFromHome} internship={internship} />
      </div>
    </div>
  )
}

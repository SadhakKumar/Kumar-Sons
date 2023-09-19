import React from 'react'
import Navbar from '../components/Navbar'

const About = (props) => {
  return (
    <>
    <Navbar user = {props.user.name}/>
    <div>About</div>
    </>
    
  )
}

export default About
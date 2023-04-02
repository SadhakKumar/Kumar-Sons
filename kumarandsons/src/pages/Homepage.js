import React from 'react'
import Navbar from '../components/Navbar'

export default function Homepage(props) {
  return (
    <div>
      <Navbar user = {props.user.name}/>
      <div>homepage!</div>
    </div>
  )
}

import React, {useState} from 'react'
import './login.css'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';



function Login(props) {

  const navigate = useNavigate();


  const [state,setstate] = useState({
    email: "",
    password: ""
  })

  const handlechange = (e) =>{
    const {name,value} = e.target;

    setstate({
      ...state,
      [name]: value
    })
  }
  const login = () =>{
    const {email,password} = state

    if(email && password){
      axios.post("http://localhost:8000/login", state)
      .then(res => {
        alert(res.data.message)
        props.setUser(res.data.user)
        navigate('/')
      })
    }else{
      alert("Invalid credentials")
    }
  }
  return (
    <div className='parent-container'>
      <div className='container'>
        <input type="text" placeholder='email' name='email' value ={state.email} onChange={handlechange}/>
        <input type="text" placeholder='password' name='password' value={state.password} onChange={handlechange}/>  
        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
        <div>or</div>
        <Link to='/register' className="btn btn-primary">register</Link>

      </div>
    </div>
  )
}

export default Login

import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './register.css'
import { useNavigate } from 'react-router-dom';


export default function Register() {

    const navigate = useNavigate();


    const [state,setstate] = useState({
        name: "",
        email: "",
        password: "",
        reEnetrPassword: ""
    })

    const handlechange = (e) => {
        
        const {name,value} = e.target;

        setstate({
            ...state,
            [name]:value
        })
    }

    const register = () =>{
        const {name,email,password,reEnetrPassword} = state

        if(name && email && password && password === reEnetrPassword){
            axios.post("http://localhost:8000/register", state)
            .then(res =>{
                console.log(res)
                if(res.data === "user alresdy registered"){
                    alert("user alresdy exists!")
                    navigate('/login')
                }else{
                    alert(res.data.message)
                    navigate('/login')
                }
            })
        }else{
            alert("invalid credentials!")
        }
    }
  return (
    <div>
        <div className='parent-container'>
        <div className='container'>
            <input type="text" placeholder='Name' name='name' value ={state.name} onChange={handlechange}/>
            <input type="text" placeholder='Email' name='email' value ={state.email} onChange={handlechange}/>
            <input type="text" placeholder='Password' name='password' value={state.password} onChange={handlechange}/>
            <input type="text" placeholder='Re-enter Password' name='reEnetrPassword' value={state.reEnetrPassword} onChange={handlechange}/>  
            <button type="button" className="btn btn-primary" onClick={register}>Register</button>
            <div>or</div>
            <Link to='/login' className="btn btn-primary">Login</Link>

            </div>
        </div>
    </div>
  )
}

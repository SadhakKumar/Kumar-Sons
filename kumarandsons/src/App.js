import './App.css';
import Navbar from './components/Navbar';
import Login from './login/Login.js';
import Register from './login/Register';
import Homepage from './pages/Homepage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin';
import Career from './pages/Career';
import Filtertab from './components/Filtertab';
import axios from 'axios';


function App() {

 
  
  const [user,setUser] = useState()

  const [defaultuser,setdefaultuser] = useState({
    name: "Login"
  })

 

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route exact path ='/' element = {user && user._id ? <Homepage user = {user}/> : <Homepage user = {defaultuser}/>}/>
            <Route exact path ='/login' element= {<Login setUser = {setUser}/>}/>
            <Route exact path ='/register' element= {<Register/>}/>
            <Route exact path ='/admin' element= {user && user._id && user.email === "sadhak2003@gmail.com" ? <Admin/> : (user && user._id ? <Homepage user = {user}/> : <Homepage user = {defaultuser}/>)}/>
            <Route exact path ='/career' element= {user && user._id ? <Career user = {user}/> : <Career user = {defaultuser}/>}/>
        </Routes>
    </BrowserRouter>
    {/* <Filtertab/> */}
    </div>
  );
}

export default App;

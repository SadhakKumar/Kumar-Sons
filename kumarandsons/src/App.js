import './App.css';
import Login from './login/Login.js';
import Register from './login/Register';
import HomePage from './pages/HomePage'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin';
import Career from './pages/Career';
import './index.css';
import NavBar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.css"
import Packages from './pages/Packages';
import About from './pages/About'
import Rooms from './pages/Rooms'
import ChatPage from './pages/ChatPage';


function App() {



  const [user, setUser] = useState()

  const [defaultuser, setdefaultuser] = useState({
    name: "Login"
  })



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user && user._id ? <HomePage user={user} /> : <HomePage user={defaultuser} />} />
          <Route exact path='/login' element={<Login setUser={setUser} />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/admin' element={user && user._id && user.email === "sadhak2003@gmail.com" ? <Admin /> : (user && user._id ? <HomePage user={user} /> : <HomePage user={defaultuser} />)} />
          <Route exact path='/career' element={user && user._id ? <Career user={user} /> : <Career user={defaultuser} />} />
          <Route exact path="/Packages" element={user && user._id ? <Packages user={user} /> : <Packages user={defaultuser} />} />
          <Route exact path='/About' element={user && user._id ? <About user={user} /> : <About user={defaultuser} />} />
          <Route exact path='/Rooms' element={user && user._id ? <Rooms user={user} /> : <Rooms user={defaultuser} />} />
          <Route exact path='/Chat' element={user && user._id ? <ChatPage user={user} /> : <ChatPage user={defaultuser} />} />
        </Routes>
      </BrowserRouter>
      {/* <Filtertab/> */}

    </div>
  );
}

export default App;

import React from 'react'
import 'bootstrap'
import {Link} from 'react-router-dom'

function Navbar(props) {
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'white',height:'10vh',marginBottom:'0rem'}}>
            <div className="container-fluid">
                <a className="navbar-brand brand" href="/">Kumar&Sons</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <CustomLink className="nav-link active" aria-current="page" to="/">Home</CustomLink>
                        </li>
                        <li>
                        <CustomLink className="nav-link" to="/About">About Us</CustomLink>
                        </li>
                        <li className="nav-item">
                        <CustomLink className="nav-link" to="/Packages">Packages</CustomLink>
                        </li>
                        <li className="nav-item">
                        <CustomLink className="nav-link" to="/Rooms">Rooms</CustomLink>
                        </li>
                        <li className="nav-item">
                        <CustomLink className="nav-link" to="/Chat">Chat</CustomLink>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to = '/career'>Career</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ='/admin'>Admin</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/login'>{props.user}</Link>
                        </li>
                        
                    </ul>
                    <div className='cute-cat'>
                <img className='cute-cat-image' src="https://pluspng.com/img-png/kawaii-transparent-png-kawaii-kitty-i-by-riair-d41q2nj-png-501.png" /><img className='cute-cat-text' src='https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/49e67785781d14c.png' style={{visibility:'visible'}}></img></div>
                </div>
            </div>
        </nav>
      
    </div>
  )
}

function CustomLink({to,children,...props}){
    let path=window.location.pathname
    return(
        <li classname={path===to?'active':''}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar

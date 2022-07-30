import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-md p-0 font-size-sm nav-box" id="z-index">
  <span className="navbar-brand py-2 main-head" >Laundry</span>
 

  <div className="collapse navbar-collapse n-list" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item py-4 px-4 n-element">
        <span className="nav-link" >Home </span>
      </li>
      <li className="nav-item py-4 px-4 n-element">
        <span className="nav-link" >pricing</span>
      </li>
      <li className="nav-item py-4 px-4 n-element">
        <span className="nav-link" >career</span>
      </li>
    
      <li className="nav-item py-4 px-4 sign">
        <Link to='/' className="nav-link cust-link" >Sign In</Link>
      </li>
    </ul>
  
  </div>
</nav>
    </>
  )
}

export default Header
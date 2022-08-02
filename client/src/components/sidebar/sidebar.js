import React from 'react'
import './sidebar.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
     <div className='aside-box main-b'>
                    <div className='my-3'>
                  <NavLink to='/landingpage'><img className='past-icon' src="./home-run.png" alt="" /></NavLink>
                    </div>
                    <div className='my-3'>
                   <NavLink to='/createorder'> <img className='past-icon' src="./more.png" alt="" /> </NavLink>
                    </div>
                    <div className='list-icon my-3'>
                   <NavLink to='/pastorder'> <img className='past-icon-list' src="./list.png" alt="" /></NavLink>
                    </div>
                </div> 
    </>
  )
}

export default Sidebar;
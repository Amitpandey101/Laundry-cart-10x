import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
     <div className='aside-box'>
                    <div className='my-3'>
                    <img className='past-icon' src="./home-run.png" alt="" />
                    </div>
                    <div className='my-3'>
                   <Link> <img className='past-icon' src="./more.png" alt="" /> </Link>
                    </div>
                    <div className='list-icon my-3'>
                   <Link to='/pastorder'> <img className='past-icon-list' src="./list.png" alt="" /></Link>
                    </div>
                </div> 
    </>
  )
}

export default Sidebar;
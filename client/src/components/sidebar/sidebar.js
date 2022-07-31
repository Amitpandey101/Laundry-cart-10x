import React from 'react'
import './sidebar.css';
const Sidebar = () => {
  return (
    <>
     <div className='aside-box'>
                    <div className='my-3'>
                    <img className='past-icon' src="./home-run.png" alt="" />
                    </div>
                    <div className='my-3'>
                    <img className='past-icon' src="./more.png" alt="" />
                    </div>
                    <div className='list-icon my-3'>
                    <img className='past-icon-list' src="./list.png" alt="" />
                    </div>
                </div> 
    </>
  )
}

export default Sidebar;
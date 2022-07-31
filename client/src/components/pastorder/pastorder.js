import React from 'react'
import Header2 from '../header-2/header2'
import Sidebar from '../sidebar/sidebar'
import { useState ,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Pastorder = () => {
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      history.push('/')
    }
    
  },[])
    const [order,setorder] = useState('')
    

  return (
    <>
    <Header2></Header2>
    <div className='box'>
        <div className="row">
        <div className='col-lg-1 col-md-1 p-0'>
        <Sidebar></Sidebar>
        </div>
        <div className='col-lg-11'>
            {/* Remaining Sections  */}
            <div className='container'>{!order && <p className='d-flex justify-content-center'> create </p>}</div>
        </div>
        </div>
    </div>

    </>
  )
}

export default Pastorder;
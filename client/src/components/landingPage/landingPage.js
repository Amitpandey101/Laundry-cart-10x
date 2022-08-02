import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Header2 from '../header-2/header2';
import Sidebar from '../sidebar/sidebar';
import './landingpage.css'

const LandingPage = () => {
    const [name , setName] = useState('')
    useEffect(()=>{
        setName(localStorage.getItem('name'))
    },[])
  return (
    <>
    <Header2></Header2>
		<div className="box">
			<div className="row main-b">
					<div className="col-lg-1 col-md-1 p-0">
 						<Sidebar></Sidebar>
					</div>
 					<div className="col-lg-11 col-md-8 col part-1">
                        <img className='laundry-img' src="./laundry-home.jpg" alt="" />
 						
                         <div className="part1-child">
                         <h3 className="head-2">Hi! {name}</h3>
                            <h2 className="head-2">Welcome To Laundry</h2>
							<h2 className="head-2">Service</h2>
                            </div>
 						
					</div>
				</div>
			</div>
    </>
  )
}

export default LandingPage;

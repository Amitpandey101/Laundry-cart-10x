import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
    <div className='referal-box'>
        <span className='line-1'>Now Refer & Earn ₹500 for every referral*</span>
        <span className='line-2'>* Terms and conditions will be applied</span>
    </div>
    <div className="f-image">
        <div className="row hei">
        <div className='col-lg-4 flex-box' >
          <ul className='single-ul'>
            <li>ABOUT US</li>
            <li>Doorstep Wash & Dryclean Service</li>
          </ul>
        </div>
        <div className='col-lg-4 box-part-2' >
            <div>
            <ul className='list-ul'>
                <li>Home</li>
                <li>Sign In</li>
                <li>Register</li>
            </ul>
            </div>
            <div>
            <ul className='list-ul'>
                <li>Pricing</li>
            </ul>
            </div>
            <div>
            <ul className='list-ul'>
                <li>Career</li>
                <li>Blogs</li>
                <li>Create</li>
            </ul>
            </div>
            <div>
            <ul className='list-ul'>
                <li>Contact</li>
            </ul>
            </div>
        </div>
        <div className='col-lg-4 box-part-3' >
        <ul className='single-ul'>
            <li>SOCIAL MEDIA</li>
        </ul>
        <div className="im-icons">
            <img className='sz-img' src="/facebook.jpg" alt="" />
            <img className='sz-img' src="/instagram.jpg" alt="" />
            <img className='sz-img' src="/linkedin.jpg" alt="" />
        </div>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Footer
import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [id , setId] = useState('')
    const [inValid , setInvalid] = useState(false)
    const [password , setPassword] = useState('');

    const idHandler = (val)=>{
        setInvalid(false)
            setId(val);
    }
    const passwordHandler = (pass) => {
            setPassword(pass);
    }

    const formSubmitHandle = (e) => {
        e.preventDefault()
        let phone = ''
        let email = ''
        if(id.trim().includes('@') && id.trim().includes('.') && id.trim().charCodeAt(0) > 64){
            email = id;
            console.log('email')
        }else if(id.trim().length === 10){
            phone = id;
            console.log('phone no.')
        }else{
            setInvalid(true)
            return;
        }
        const data = {
            email:email,
            phone:phone,
            password:password
        }
        console.log(data)
        setId('')
        setPassword('')
    }
  return (
   <>
    <Header></Header>
    <section>
    <div className="row main-b">
					<div className="col-lg-6 part-1">
						<div className="part1-child">
							<h2 className="head-2">Laundry</h2>
							<h2 className="head-2">Service</h2>
							<p className="mb-0 text-capitalize">Doorstep wash &</p>
							<p className="mar text-capitalize">dryclean service</p>
							<p className="text-capitalize">Don't Have An Account?</p>
							<Link to='/register' className="bt-part-1">Register</Link>
						</div>
						<div className="line"></div>
					</div>
					<div className="col-lg-6 part-2">
						<form onSubmit={formSubmitHandle}>
						<div>
							<h3 className="head-3">SIGN IN</h3>

							<div className="row part-2-box">
								<div className="col-lg-12 col-md-12">
                                    {id && <div className='label-div'>
                                    <label htmlFor="id">Mobile/Email</label>
                                    </div>}
                                   
                                  
									<input
										type="text"
										className={inValid ?'cust-input-warning':"cust-input-1"}
										autoComplete="off"
										placeholder="Mobile/Email"
										name="id"
										required
                                        value={id}
                                        onChange={(e)=>idHandler(e.target.value)}
									/>

                                    <div className='text-capitalize warning'><span>{inValid &&'invalide userName'}</span></div>
                                    
                                    
								</div>
								<div className="col-lg-12 col-md-12">
                                    {id && <div className='label-div'>
                                    <label htmlFor="password">Password</label>
                                    </div>}
                                    
									<input
										type="password"
										className="cust-input"
										placeholder="Password"
										name="password"
										autoComplete="off"
                                        value={password}
                                        onChange={(e)=>{passwordHandler(e.target.value)}}
										required
									/>
                                    
								</div>
                                <span className='f-pass'>Forget Password?</span>
								
							</div>
						</div>
						
							<div className="register-btn">
                            <button type='submit' className="reg-bt-2">Sign In</button>
							</div>
						
						</form>
					</div>
				</div>
    </section>
    <hr className="h-line"></hr>
    <Footer></Footer>
   </>
  )
}

export default Login
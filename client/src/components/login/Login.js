import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import './login.css';
import  { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const Login = () => {

	
	const history = useHistory()
	useEffect(()=>{
		if(localStorage.getItem('token')){
			history.push('/pastorder')
		}
	})

	
	const [id, setId] = useState('');
	const [inValidEmail, setInvalidEmail] = useState(false);
	const [inValidPhone, setInvalidPhone] = useState(false);
	const [inValidPassword , setInvalidPassword] = useState(false);

	const [values, setValues] = useState({
		password: '',
		showPassword: false,
	});

	const idHandler = (val) => {
		setInvalidEmail(false);
		setInvalidPhone(false);
		setId(() => val);
	};
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (prop) => (event) => {
		setInvalidPassword(false)
		setValues({ ...values, [prop]: event.target.value });
	};


	const formSubmitHandle = (e) => {
		e.preventDefault();
		let email;
		let phone;
		if (
			id.trim().includes('@') &&
			id.trim().includes('.') &&
			id.trim().charCodeAt(0) > 64
		) {
		
			email = id;
			
		} else if (id.trim().length === 10) {
			
			phone = id;
			
		} else {
			if( id.trim().charCodeAt(0) > 64 ){
				setInvalidEmail(true)
				return;
			}else{
				setInvalidPhone(true)
				return;
			}
			
		}
	
		const data = {
			email: email,
			phone: phone,
			password: values.password,
		};
		console.log(data);
		axios.post('http://localhost:3002/login',data)
		.then((res) => {
			// console.log(res.data.token)
			if(!res.data.token){
				
				if(res.data.message.includes('Email') ){
					// alert(res.data.message)
					setInvalidEmail(true)
				}else if(res.data.message.includes('Phone')){
					// alert(res.data.message)
					setInvalidPhone(true)
				}else if(res.data.message.includes('password')){
					setInvalidPassword(true)
				}else{
					alert(res.data.message)
				}
			}else{
			localStorage.setItem('name',res.data.name)
			localStorage.setItem('token',res.data.token)
			localStorage.setItem('email',res.data.email)
			history.push('/pastorder')
			}
			
			
		})

		// setId('');
		// setValues({password:'',showPassword:false})
		
	};
	return (
		<>
			<Header></Header>
			<section>
				<div className="row main-b">
					<div className="col-lg-6 col-md-6 col-sm-6 part-1">
						<div className="part1-child">
							<h2 className="head-2">Laundry</h2>
							<h2 className="head-2">Service</h2>
							<p className="mb-0 text-capitalize">Doorstep wash &</p>
							<p className="mar text-capitalize">dryclean service</p>
							<p className="text-capitalize">Don't Have An Account?</p>
							<Link to="/register" className="bt-part-1">
								Register
							</Link>
						</div>
						<div className="line"></div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 part-2">
						<div className="container c2-box">
							<form onSubmit={formSubmitHandle}>
								<div>
									<h3 className="head-3">SIGN IN</h3>

									<div className="row part-2-box">
										<div className="col-lg-12  col-md-10 col-sm-8 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="email"
												placeholder="Email/Phone"
												className={(inValidEmail || inValidPhone) ? "cust-input col-war " :"cust-input"}
                                                value={id}
                                                onChange={(e)=>{idHandler(e.target.value)}}
												autoComplete="off"
												required
											/>
                                            {inValidEmail && <label className="new-label-warning" htmlFor="email">
											<i className='margin-bit'>Please enter a valid Email</i>
											</label>}
											{inValidPhone && <label className="new-label-warning" htmlFor="email">
											<i className='margin-right'>Please enter a valid Phone number</i>
											</label>}
											<label className="new-label" htmlFor="email">
												Email/Phone
											</label>
										</div>
										<div className="col-lg-12  col-md-10 col-sm-8 ">
											<div className="input-wrapper"></div>
											<input
												type={values.showPassword ? 'text' : 'password'}
												name="password"
												autoComplete="off"
												required
												id="password"
												placeholder="Password"
												className="cust-input"
												onChange={handlePasswordChange('password')}
												value={values.password}
												
											/>
											{inValidPassword && <label className="new-label-warning" htmlFor="email">
											<i className='margin-right-pass'>Incorrect Password</i>
											</label>}
											<label className="new-label" htmlFor="password">
												Password
											</label>
											<span
												className="lock"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
											>
												{values.showPassword ? (
													<i>
														<span className="material-symbols-outlined">
															lock_open
														</span>
													</i>
												) : (
													<i>
														<span className="material-symbols-outlined">lock</span>
													</i>
												)}
											</span>
										</div>
										
											<span className='f-pass'>Forget Password?</span>
										
									</div>
								</div>
								
								<div className="container checkbox-div">
									<div></div>
									<div className="mx-auto">
										<button type="submit" className="reg-bt-2">
											SIGN IN
										</button>
									</div>
								</div>
							</form>
						</div>
						
					</div>
				</div>
			</section>
			<hr className="h-line"></hr>
			<Footer></Footer>
		</>
	);
};

export default Login;

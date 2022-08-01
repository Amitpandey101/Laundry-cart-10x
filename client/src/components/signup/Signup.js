import React, { useState } from 'react';
import Header from '../header/Header';
import './signup.css';
import Footer from '../Footer/Footer';
import { State, City } from 'country-state-city';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const allStates = State.getStatesOfCountry('IN');
const stateNames = allStates.map((data) => {
	return data.name;
});

const Signup = () => {
	const history = useHistory();
	const [selectedState, setselectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [allCities, setAllCities] = useState();
	const [inValidEmail, setInvalidEmail] = useState(false);
	const [inValidPhone, setInvalidPhone] = useState(false);
	const [inValidState, setInvalidState] = useState(false);
	const [inValidcity, setInvalidcity] = useState(false);

	const [userName, setuserName] = useState('');
	const [userEmail, setuserEmail] = useState('');
	const [userPhone, setuserPhone] = useState('');
	const [userAddress, setuserAddress] = useState('');
	const [areaCode, setareaCode] = useState('');

	const [ticked, setTick] = useState(true);
	const [values, setValues] = useState({
		password: '',
		showPassword: false,
	});

	//Details
	const nameChangeHandler = (name) => {
		setuserName(name)
	}
	const emailChangeHandler = (email) => {
		setInvalidEmail(false)
		setuserEmail(email)
	}
	const phoneChangeHandler = (phone) => {
		setInvalidPhone(false)
		setuserPhone(phone)
	}
	const addressChangeHandler = (address) => {
		setuserAddress(address)
	}
	const pincodeChangeHandler = (pin) => {
		setareaCode(pin)
	}

	//State and City
	const cityChangeHandler = (e) => {
		setInvalidcity(false)
		setSelectedCity(e.target.value);
	};
	const stateChangeHandler = (e) => {
		setSelectedCity('')
		setInvalidState(false)
		setselectedState(e.target.value);

		const state = allStates.filter((state) => {
			return state.name === e.target.value;
		});
		const statecities = City.getCitiesOfState('IN', state[0].isoCode);

		const cityNames = statecities.map((data) => {
			return data.name;
		});

		setAllCities(cityNames);
	};

	const tickCheckHandler = (e) => {
		if (e === 'clicked') {
			if (ticked === true) {
			}
			setTick(!ticked);
		}
	};

	//password

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	//Form
	const regFormHandler = (e) => {
		e.preventDefault();
		let email = ''
		let phone = ''

		if (
			userEmail.trim().includes('@') &&
			userEmail.trim().includes('.') &&
			userEmail.trim().charCodeAt(0) > 64
		) {
			email = userEmail;
		} else {
			setInvalidEmail(true);
			return;
		}
		
		
		if (userPhone.trim().length === 10 && userPhone.trim().charCodeAt(0) > 54 && userPhone.trim().charCodeAt(0) < 58){
			phone = userPhone;
		} else {
			setInvalidPhone(true);
			return;
		}

		if(!selectedCity){
			setInvalidcity(true)
			return;
		}
		if(!selectedState){
			setInvalidState(true);
			return;
		}

		

		const formData = {
			name: userName,
			email: userEmail,
			password: values.password,
			phone: userPhone,
			state: selectedState,
			city: selectedCity,
			address: userAddress,
			pincode: areaCode,
		};
		console.log(formData)
		axios.post('http://localhost:3002/register',formData)
		.then((res) => {
			if(res.data.message){
				console.log('successful')
				alert(res.data.message)
				history.push('/');
			}else{
				if(res.data.error.includes('Email')){
					alert(res.data.error)
					return;
				}else if(res.data.error.includes('phone')){
					alert(res.data.error)
					return;
				}
			}
			
			
			
		})
		.catch((err)=>{console.log(err)})

		
		// history.push('/')
	};

	return (
		<>
			<Header></Header>
			<section>
				<div className="row main-b">
					<div className="col-lg-3 part-1">
						<div className="part1-child">
							<h2 className="head-2">Laundry</h2>
							<h2 className="head-2">Service</h2>
							<p className="mb-0 text-capitalize">Doorstep wash &</p>
							<p className="mar text-capitalize">dryclean service</p>
							<p className="text-capitalize">Already have account</p>
							<Link to="/" className="bt-part-1">
								Sign In
							</Link>
						</div>
						<div className="line"></div>
					</div>
					<div className="col-lg-9 part-2">
						<div className="container c-box">
							<form onSubmit={regFormHandler}>
								<div>
									<h3 className="head-3">REGISTER</h3>

									<div className="row part-2-box">
										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="name"
												placeholder="Name"
												className="cust-input"
												value={userName}
												onChange={(e)=>nameChangeHandler(e.target.value)}	
												autoComplete="off"
												required
											/>
											<label className="new-label" htmlFor="name">
												Name
											</label>
										</div>
										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="email"
												placeholder="Email"
												className={inValidEmail ? "cust-input col-war " :"cust-input"}
												value={userEmail}
												onChange={(e)=>emailChangeHandler(e.target.value)}
												autoComplete="off"
												required
											/>
											{inValidEmail && <label className="new-label-warning-reg" htmlFor="email">
											<i>Please enter a valid Email id</i>
											</label>}
											<label className="new-label" htmlFor="email">
												Email
											</label>
										</div>
										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type={values.showPassword ? 'text' : 'password'}
												name="password"
												autoComplete="off"
												required
												id="password"
												placeholder="SetPassword"
												className="cust-input"
												onChange={handlePasswordChange('password')}
												value={values.password}
											/>
											<label className="new-label" htmlFor="password">
												SetPassword
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

										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="phone"
												placeholder="Phone (+91)"
												className={inValidPhone ? "cust-input col-war " :"cust-input"}
												value={userPhone}
												onChange={(e)=>phoneChangeHandler(e.target.value)}
												minLength="10"
												maxLength="10"
												autoComplete="off"
												required
											/>
											{inValidPhone && <label className="new-label-warning-reg" htmlFor="email">
											<i>Please enter a valid Phone Number</i>
											</label>}
											<label className="new-label" htmlFor="phone">
											Phone (+91)
											</label>
										</div>

										<div className="col-lg-6 text-muted">
											<select
												name="states"
												className="cust-input"
												id="state"
												placeholder="States"
												value={selectedState}
												onChange={stateChangeHandler}
												autoComplete="off"
												required
											>
												<option>State</option>
												{stateNames.map((name, idx) => (
													<option key={idx}>{name}</option>
												))}
											</select>
											{inValidState && <label className="new-label-warning-reg" htmlFor="email">
											<i>Please Select your state</i>
											</label>}
											{selectedState && (
												<label className="new-label" htmlFor="state">
													State
												</label>
											)}
										</div>

										<div className="col-lg-6">
											<select
												name="city"
												id="city"
												className="cust-input"
												value={selectedCity}
												onChange={cityChangeHandler}
												autoComplete="off"
												required
											>
												<option>District</option>
												{selectedState &&
													allCities.map((name, idx) => (
														<option key={idx}>{name}</option>
													))}
											</select>
											{inValidcity && <label className="new-label-warning-reg" htmlFor="email">
											<i>Please Select your City</i>
											</label>}
											{selectedCity && (
												<label className="new-label" htmlFor="city">
													District
												</label>
											)}
										</div>

										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="address"
												placeholder="Address"
												value={userAddress}
												onChange={(e)=>addressChangeHandler(e.target.value)}
												className="cust-input"
												name="address"
												autoComplete="off"
												required
											/>
											<label className="new-label" htmlFor="address">
												Address
											</label>
										</div>

										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="pincode"
												placeholder="Pincode"
												className="cust-input"
												value={areaCode}
												onChange={(e)=>pincodeChangeHandler(e.target.value)}
												name="pincode"
												minLength="6"
												maxLength="6"
												autoComplete="off"
												required
											/>
											<label className="new-label" htmlFor="pincode">
												Pincode
											</label>
										</div>
									</div>
								</div>
								<div></div>
								<div className="container checkbox-div">
									<label className="form-check-label check-text">
										<input
											type="checkbox"
											className="form-check-input"
											value={ticked}
											onChange={() => tickCheckHandler('clicked')}
										/>
										I agree to Terms & Condition receiving marketing and
										promotional materials
									</label>
									<div className="mx-auto">
										{!ticked ? (
											<button type="submit" className="reg-bt-2">
												Register
											</button>
										) : (
											<button className="reg-bt-2-disable">Register</button>
										)}
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

export default Signup;

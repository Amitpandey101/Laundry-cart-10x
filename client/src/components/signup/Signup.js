import React, { useState } from 'react';
import Header from '../header/Header';
import './signup.css';
import Footer from '../Footer/Footer';
import Copyright from '../copyright/copyright';
import { State, City } from 'country-state-city';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';

const allStates = State.getStatesOfCountry('IN');
const stateNames = allStates.map((data) => {
	return data.name;
});

const Signup = () => {
	const [selectedState, setselectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [allCities, setAllCities] = useState();
	const [ticked, setTick] = useState(true);
	const cityChangeHandler = (e) => {
		setSelectedCity(e.target.value);
		console.log(e.target.value);
	};
	const stateChangeHandler = (e) => {
		setselectedState(e.target.value);
		console.log(e.target.value);
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

	//pass
	const [values, setValues] = useState({
		password: '',
		showPassword: false,
	});
	console.log(values.password);
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
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
							<form>
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
												autoComplete="off"
												required
											/>
											<label className="new-label" for="name">
												Name
											</label>
										</div>
										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="email"
												placeholder="Email"
												className="cust-input"
												autoComplete="off"
												required
											/>
											<label className="new-label" for="email">
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
												placeholder="Password"
												className="cust-input"
												onChange={handlePasswordChange('password')}
												value={values.password}
											/>
											<label className="new-label" for="password">
												Password
											</label>
											<span
												className="lock"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
											>
												{values.showPassword ? (
													<i>
														<span class="material-symbols-outlined">
															lock_open
														</span>
													</i>
												) : (
													<i>
														<span class="material-symbols-outlined">lock</span>
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
												className="cust-input"
												minLength="10"
												maxLength="10"
												autoComplete="off"
												required
											/>
											<label className="new-label" for="phone">
												Name
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
												<option selected>State</option>
												{stateNames.map((name, idx) => (
													<option key={idx}>{name}</option>
												))}
											</select>
											{selectedState && <label className="new-label" for="state">
												State
											</label>}
											
										</div>

										<div className="col-lg-6">
											<select
												name="city"
												id='city'
												className="cust-input"
												
												value={selectedCity}
												onChange={cityChangeHandler}
												autoComplete="off"
												required
											>
												<option className="option-placeholder">District</option>
												{selectedState &&
													allCities.map((name, idx) => (
														<option key={idx}>{name}</option>
													))}
											</select>
											{selectedCity && <label className="new-label" for="city">
												District
											</label>}
										</div>

										<div className="col-lg-6 ">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="address"
												placeholder="Address"
												className="cust-input"
												name='address'
												autoComplete="off"
												required
											/>
											<label className="new-label" for="address">
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
												name='pincode'
												minLength="6"
												maxLength="6"
												autoComplete="off"
												required
											/>
											<label className="new-label" for="pincode">
												Pincode
											</label>
										</div>
									
									</div>
								</div>
								<div>
									
								</div>
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

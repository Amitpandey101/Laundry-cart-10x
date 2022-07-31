import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import './login.css';
import  { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Login = () => {
	const history = useHistory()
	const [id, setId] = useState('');
	const [inValid, setInvalid] = useState(false);
	const [values, setValues] = useState({
		password: '',
		showPassword: false,
	});

	const idHandler = (val) => {
		setInvalid(false);
		setId(val);
	};
	
	
	
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


	const formSubmitHandle = (e) => {
		e.preventDefault();
		let phone = '';
		let email = '';
		if (
			id.trim().includes('@') &&
			id.trim().includes('.') &&
			id.trim().charCodeAt(0) > 64
		) {
			email = id;
			console.log('email');
		} else if (id.trim().length === 10) {
			phone = id;
			console.log('phone no.');
		} else {
			setInvalid(true);
			return;
		}
		const data = {
			email: email,
			phone: phone,
			password: values.password,
		};
		console.log(data);
		setId('');
		setValues({password:'',showPassword:false})
		history.push('/pastorder')
	};
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
							<Link to="/register" className="bt-part-1">
								Register
							</Link>
						</div>
						<div className="line"></div>
					</div>
					<div className="col-lg-6 part-2">
						<div className="container c2-box">
							<form onSubmit={formSubmitHandle}>
								<div>
									<h3 className="head-3">SIGN IN</h3>

									<div className="row part-2-box">
										<div className="col-lg-12">
											<div className="input-wrapper"></div>
											<input
												type="text"
												id="email"
												placeholder="Email/Phone"
												className={inValid ? "cust-input col-war " :"cust-input"}
                                                value={id}
                                                onChange={(e)=>{idHandler(e.target.value)}}
												autoComplete="off"
												required
											/>
                                            {inValid && <label className="new-label-warning" htmlFor="email">
											<i>Please enter a valid ID</i>
											</label>}
											<label className="new-label" htmlFor="email">
												Email/Phone
											</label>
										</div>
										<div className="col-lg-12">
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
									</div>
								</div>
								<div></div>
								<div className="container checkbox-div">
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

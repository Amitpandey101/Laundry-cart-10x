import React from 'react';
import './header2.css';
import { useHistory } from 'react-router-dom';

const Header2 = () => {
    const history = useHistory()
    const logoutHandler = ()=>{
        alert("Are you sure Want to Logout")
        history.push('/')
    }

	return (
		<>
			<nav className="navbar navbar-expand-md p-0 font-size-sm nav-box">
				<span className="navbar-brand py-2 main-head">Laundry</span>

				<div
					className="collapse navbar-collapse n-list"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item py-4 px-4 n-element">
							<span className="nav-link">pricing</span>
						</li>
						<li className="nav-item py-4 px-4 n-element">
							<span className="nav-link">career</span>
						</li>

						<li className="nav-item user" onClick={logoutHandler}>
							<span to="/" className="nav-link cust-link-acc">
								<span className="user-acc">
                                    <img className='acc-img' src="./acc.png" alt="" />
								</span>
                                <div className='user-name'>
                                <span >Hi! {'User Name'}</span>
                                </div>
								
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header2;

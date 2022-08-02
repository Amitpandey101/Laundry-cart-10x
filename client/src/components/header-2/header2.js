import React,{useState} from 'react';
import './header2.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';

const Header2 = () => {
    const history = useHistory()

	const [show, setShow] = useState(false);
	  const handleClose = () => setShow(false);
	  const handleShow = () => setShow(true);
	  const [userName , setUserName] = useState('')
	useEffect(()=>{
		setUserName(localStorage.getItem('name'))
	},[])
	
	  const logoutHandler = async () => {
			localStorage.removeItem('token')
			localStorage.removeItem('name')
			localStorage.removeItem('email')
			history.push('/')
		  	return;
	  };

  


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

						<li className="nav-item user"  onClick={handleShow}>
							<span to="/" className="nav-link cust-link-acc">
								<span className="user-acc">
                                    <img className='acc-img' src="./acc.png" alt="" />
								</span>
                                <div className='user-name'>
                                <span >Hi! {userName}</span>
                                </div>
								


							</span>
						</li>
					</ul>
				</div>
			</nav>
			

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="false"
        keyboard={false}
		className='modal'
      >
        <Modal.Header className='modalnewHeader' closeButton>
          <Modal.Title >Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-capitalize modal-body-main'>
			<img className='alert-img' src="./red-alert.jpg" alt="" />
         Are you sure want to logout ?
        </Modal.Body>
        <Modal.Footer>
          <Button className='cancel' variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='confirm' onClick={logoutHandler} variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>


		</>
	);
};

export default Header2;

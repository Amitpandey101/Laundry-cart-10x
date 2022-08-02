import React, { useEffect } from 'react';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header2 from '../header-2/header2';
import Sidebar from '../sidebar/sidebar';
import './pastorder.css';
import axios from 'axios';
import { OffcanvasBody } from 'react-bootstrap';
import { Modal, CloseButton } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

const Pastorder = () => {
	const [modalShow, setModalShow] = useState(false);
	const [cancelorder, setcancelorder] = useState('Cancel Order');
	const [order, setorder] = useState('');
	const [summarydata, setsummarrydata] = useState();

	const [summaryp, setsummaryp] = useState(true);
	const datasummary = (value) => {
		const result = orderData.filter((data) => {
			return value === data._id;
		});
		setsummarrydata(result[0].order);
		console.log(result[0].order);
	};
	const Showsummary = () => {
		setsummaryp(!summaryp);
	};

	const history = useHistory();
	const [orderData, setorderData] = useState([]);
	useEffect(() => {
		if (!localStorage.getItem('token')) {
			history.push('/');
		}
		axios
			.get('http://localhost:3002/pastorder', {
				headers: { authorization: localStorage.getItem('token') },
			})
			.then((data) => {
				setorderData(data.data.orders);
			});
	}, []);
	console.log(orderData);

  const viewChangeHandler=(tar)=>{
    axios
      .delete('http://localhost:3002/deleteorder', {
        data:{data:tar} , headers: { authorization: localStorage.getItem("token") },
      }).then((res)=>{
      
       setorderData(res.data.remorders)
      })
    }

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal className="modal" {...props}>
          <Modal.Header className="popupheader">
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>
                Alert &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <CloseButton />{" "}
              </h4>
              {/* <CloseButton /> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to cancel the order No:order 1</p>
            <img className="alertimage" src="red-alert.jpg" alt="" />
          </Modal.Body>
          <Modal.Footer>
            <td onClick={()=>{props.onHide();setsummaryp(!summaryp)}} animation={false}>
              {" "}
              <button className="buttonalign">Proceed</button>
            </td>
          </Modal.Footer>
        </Modal>
      );
    }

  
	return (
		<>



<Header2></Header2>
        <div className="box">
          <div className="row ">
            <div className="col-lg-1 col-md-1 p-0">
              <Sidebar></Sidebar>
            </div>

            <div className="col-lg-11">
              {/* Remaining Sections  */}
              
             <div className="past-table-order">

             <table class="table table-striped ">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Order id</th>
						<th scope="col">Order Date & Time</th>
						<th scope="col">Store Location</th>
						<th scope="col">City</th>
						<th scope="col">Store Phone</th>
						<th scope="col">Total Items</th>
						<th scope="col">Price</th>
						<th scope="col">Status</th>
						<th scope="col"></th>
						<th scope="col">Views</th>
					</tr>
				</thead>
				<tbody>
					{orderData && orderData.map((order) => (
						<tr>
							<td>{order._id}</td>
							<td>{order.date}</td>
							<td>Jp Nagar</td>
							<td>Bangalore</td>
							<td>+919988667755</td>
							<td>{order.totalItem}</td>
							<td>{order.Total}</td>
							<td>Ready to pickup</td>
							<td
								style={{ color: 'red', cursor: 'pointer' }}
								variant="secondary"
								onClick={() => viewChangeHandler(order._id)}
							>
								{cancelorder}
							</td>
							<MyVerticallyCenteredModal
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
							<td>
								<img
									className="eye"
									src="eye.png"
									alt=""
									onClick={() => {
										datasummary(order._id);
										Showsummary();
									}}
								/>
							</td>
						</tr>
					))}

					
				</tbody>
			</table>


             </div>
            </div>
          </div>
        </div>


        <IconContext.Provider value={{ color: "#fff" }}>
                  <nav className={summaryp ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                      <li className="navbar-toggle">
                        <p>Summary</p>
                        <Link
                          to="#"
                          className="menu-bars"
                          onClick={Showsummary}
                        >
                          <AiIcons.AiOutlineClose />
                        </Link>
                      </li>
                      <li className="d-flex flex-row justify-content-around align-items-center store-info-pastorders">
                        <div className="d-flex flex-column pr-2"> 
                          <b>Store Location</b>
                          <p>JP Nager</p>
                          </div>
                         


                        <div className="d-flex flex-column pr-2">
                          <div>
                            <b>Store address:</b>
                            <div> xyz</div>
                          </div>
                        </div>
                        <div>
                          <b>Phone: </b> <div>91 9999999999</div>
                        </div>
                      </li>
                      <div className="table-summary-pastorders">
                Order Details
            <div>
            {summarydata.map((item, key) => {
                return item.quantity > 0 ? (
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" ></th>
                        <th scope="col" ></th>
                        <th scope="col" ></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ height: "10%" }}>
                        <th key={key} scope="row">
                          {item.productname}
                        </th>
                        <th
                          key={key}
                          className="d-flex flex-row mt-1 services-pastorders"
                        >
                          {item.washtype.Washing > 0 ? (
                            <i>Washing&nbsp;&nbsp;</i>
                          ) : null}
                          {item.washtype.Ironing > 0 ? (
                            <i>Ironing&nbsp;&nbsp;</i>
                          ) : null}
                          {item.washtype.Dryclean > 0 ? (
                            <i>Dryclean&nbsp;&nbsp;</i>
                          ) : null}
                          {item.washtype.Chemicalwash > 0 ? (
                            <i>Chemicalwash</i>
                          ) : null}
                        </th>
                        <th key={key}>
                          {item.quantity}x{item.cost}=
                        </th>

                        <th
                          key={key}
                          style={{ color: "#5861AE", fontSize: "larger" }}
                        >
                          {item.total}
                       </th>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div></div>
                );
              })}
            </div>  
                <span className="d-flex flex-row justify-content-end align-items-center mr-4 pr-3 charges-pastorders">Sub total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>xyz</b></span>
                <span className="d-flex flex-row justify-content-end align-items-center mr-4 pr-3 charges-pastorders">Pickup charges:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>90</b></span>
                <div className="d-flex flex-row justify-content-end align-items-center mr-5 pr-3 grandtotal-pastorders">Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rsxyz</div>
                <p className="pt-4">Address</p>
                <div></div>
               

              </div>
              <div className="d-flex flex-row justify-content-end align-items-center mr-4 pr-5 summaryend-pastorders"><button
                    type="button"
                    className="btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    style={{
                      border: "1px solid #5861AE",
                      backgroundColor: "#5861AE",
                      color: "#fff",
                      padding: "2px 20px",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                    // onClick={()=>{
                    //   onconfirmhandler();
                    //     SetOpacity(1);
                    //     ShowSidebar();
                    //     handleClick();
                    //     handleShowmodal();
                     
                    // }}
                  >
                    Confirm
                  </button></div>
            </ul>
          </nav>
        </IconContext.Provider>





		
		</>
	);
};

export default Pastorder;

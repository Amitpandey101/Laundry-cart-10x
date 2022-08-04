import React, { useEffect } from "react";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header2 from "../header-2/header2";
import Sidebar from "../sidebar/sidebar";
import "./pastorder.css";
import axios from "axios";
import { Modal } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const Pastorder = () => {
  const [address, setAddress] = useState("");
  const [modalShow, setModalShow] = useState(false);
  // const [cancelorder, setcancelorder] = useState('Cancel Order');
  // const [order, setorder] = useState('');
  const [summarydata, setsummarrydata] = useState();
  const [orderId, setOrderId] = useState();
  const [subtotal, setsubtotal] = useState(0);
  const [ordertotal, setordertotal] = useState(0);

  const [summaryp, setsummaryp] = useState(true);
  const datasummary = (value) => {
    setOrderId(value);
    const result = orderData.filter((data) => {
      return value === data._id;
    });
    setsummarrydata(result[0].order);
    setsubtotal(result[0].Subtotal);
    setordertotal(result[0].Total);
  
  };
  const Showsummary = () => {
    setsummaryp(!summaryp);
  };

  // const heightdocument = window.screen.height
  // console.log(heightdocument)

  const history = useHistory();
  const createorderhandler = () =>{
    history.push("/createorder")
  }
  const [orderData, setorderData] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    axios
      .get("http://localhost:3002/pastorder", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((data) => {
        setorderData(data.data.orders);
        setAddress(localStorage.getItem("address"));
      });
    
  },[]);
  // console.log(orderData);

  const viewChangeHandler = (tar) => {
    axios
      .delete("http://localhost:3002/deleteorder", {
        data: { data: tar },
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setorderData(res.data.rem);
      });
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} backdrop="false" keyboard={false} className="modal">
        <Modal.Header className="modalnewHeader" closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-capitalize modal-body-main-past">
          <img className="alert-img" src="./red-alert.jpg" alt="" />
          <p className="text-align-center">
            {" "}
            Are you sure want to cancel the order No: {orderId}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="cancel-orders-btn"
            variant="secondary"
            onClick={() => {
              viewChangeHandler(orderId);
              setModalShow(false);
              setsummaryp(true);
            }}
          >
            Proceed
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Header2></Header2>
      <div className="box min-h">
        <div className="row ">
          <div className="col-lg-1 col-md-1 p-0">
            <Sidebar></Sidebar>
          </div>

          <div className="col-lg-11">
            {/* Remaining Sections  */}

            <div className="past-table-order">
              {orderData.length>0 ? (<table className="table table-striped ">
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
                  {orderData &&
                    orderData.map((order,idx) => (
                      <tr key={idx}>
                        <td>{order._id}</td>
                        <td>{order.date}</td>
                        <td>Jp Nagar</td>
                        <td>Bangalore</td>
                        <td>+919988667755</td>
                        <td>{order.totalItem}</td>
                        <td>{order.Total}</td>
                        <td>Ready to pickup</td>
                        <td
                          style={{ color: "red", cursor: "pointer" }}
                          variant="secondary"
                        >
                          <span
                            className="cancel-past-order"
                            onClick={() => {
                              setModalShow(true);
                              setOrderId(order._id);
                            }}
                          >
                            Cancel Order
                          </span>
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
                              setOrderId(order._id);
                              datasummary(order._id);
                              
                              setsummaryp(false);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>) : (
                          <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"80vh"}}><p>No orders available</p><button className="btn" style={{color:"#5861AE",border:"1px solid #5861AE",padding:"0.3rem 2rem"}} onClick={createorderhandler}>create</button></div>
                        )}
            </div>
          </div>
        </div>
      </div>

      <IconContext.Provider value={{ color: "#fff" }}>
        <nav
          className={
            summaryp ? "nav-menu-pastorders active" : "nav-menu-pastorders"
          }
        >
          <ul className="nav-menu-items-pastorders">
            <li className="navbar-toggle-pastorders">
              <p>Summary</p>
              <Link to="#" className="menu-bars" onClick={Showsummary}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="d-flex flex-row justify-content-around align-items-center store-info-pastorders">
              <div className="d-flex flex-column pr-2">
                <b>Store Location</b>
                <p>JP Nagar</p>
              </div>

              <div className="d-flex flex-column pr-2">
                <div>
                  <b>Store address:</b>
                  <div> Near Phone booth, 10th road</div>
                </div>
              </div>
              <div>
                <b>Phone: </b> <div>+91 999-999-9999</div>
              </div>
            </li>
            
            <div className="table-summary-pastorders">
              Order Details
              <div>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: "35%" }}></th>
                      <th scope="col" style={{ width: "45%" }}></th>
                      <th scope="col" style={{ width: "13%" }}></th>
                      <th scope="col" style={{ width: "7%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {summarydata &&
                      summarydata.map((item, key) => {
                        return item.quantity > 0 ? (
                          <tr key={key}>
                            <th  scope="row">
                              {item.productname}
                            </th>
                            <th
                            
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
                            <th >
                              {item.quantity}x{item.cost}=
                            </th>

                            <th
                              
                              style={{ color: "#5861AE", fontSize: "larger" }}
                            >
                              {item.total}
                            </th>
                          </tr>
                        ) : (
                          <tr key={Math.random()*10}></tr>
                        );
                      })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Sub total:</td>
                      <td>
                        <b>{subtotal}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="d-flex flex-row justify-content-end align-items-start mr-3 pr-1 charges-pastorders">
                Pickup charges:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>90</b>
              </span>
              <div className="d-flex flex-row justify-content-end align-items-center mr-5 pr-3 grandtotal-pastorders">
                Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs {ordertotal}
              </div>
              <p className="pt-4">Address</p>
              <div className="address-box">
                <p>{address}</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-center mr-4 pr-5 summaryend-pastorders">
              <button
                className="Cancel-order-red btn"
                onClick={() => {
                  setModalShow(true);
                  setsummaryp(true);
                }}
              >
                {" "}
                Cancel Order
              </button>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Pastorder;

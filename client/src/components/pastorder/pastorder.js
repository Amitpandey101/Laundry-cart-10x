import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Header2 from "../header-2/header2";
import Sidebar from "../sidebar/sidebar";
import "./pastorder.css";
import Button from 'react-bootstrap/Button';

import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


import axios from "axios";
import { Offcanvas } from "react-bootstrap";
import { Modal, CloseButton, ModalBody } from "react-bootstrap";
const Pastorder = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cancelorder, setcancelorder] = useState("Cancel Order");
  const [orderData, setorderData] = useState([]);
  const [ordersendData, setOrdersendData] = useState([]);
  // const [order, ] = useState("");
  const history = useHistory();
  // const Routehandler = () =>{
  //   history.push('/createorder')
  // }
  
  const [summaryShow, setsummaryShow] = useState(true);

  const createorderHandler = () => {
    history.push("/createorder");
  };
  const summaryHandler = () => {
    setsummaryShow(!summaryShow)
    console.log(ordersendData)
 

  };
  const handleOrderdata=(order)=>{
 setOrdersendData(order)
 
    
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    axios
      .get("http://localhost:3002/pastorder", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((data) => {
        setorderData(data.data.orders)

      });
  }, []);
  // console.log(orderData)
  // totalPrice:
  const cancelHandler = (tar) => {
    axios
      .delete("http://localhost:3002/deleteorder", {
        data: { data: tar }, headers: { authorization: localStorage.getItem("token") },
      }).then((res) => {

        setorderData(res.data.remorders)
      })
      history.push("./pastorder")
    console.log(tar)
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
          <td onClick={props.onHide} animation={false}>

            <button className="buttonalign" onClick={summaryHandler}  >Proceed</button>
          </td>

        </Modal.Footer>
      </Modal>

    );
  }
  return (
    <>
      <div>
        <Header2></Header2>
        <Sidebar></Sidebar>


        <span className="order">Orders | 0</span>
        <span className="box-create"></span>
        <span
          className="create"
          onClick={createorderHandler}
          style={{ cursor: "pointer" }}
        >
          Create
        </span>
        <div className="table-main">
          <span className="search"></span>
          <span className="Search-box">_______________</span>

          <table class="table">
            <thead class="thead-dark">
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

              {orderData.map((order) =>
                <tr>
                  <td>{order._id}</td>
                  <td>{order.date}</td>
                  <td>Jp Nagar</td>
                  <td>Bangalore</td>
                  <td>+919988667755</td>
                  <td>{order.totalItems}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td
                    style={{ color: "red", cursor: "pointer" }}
                    variant="secondary"
                    // onClick={() => viewChangeHandler(order._id)}
                    onClick={() => [setcancelorder(""), setModalShow(true)]}
                  >
                    <span onClick={()=>handleOrderdata(order)}>{cancelorder}</span>
                  </td>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    // ordersendData={ordersendData}
                    onHide={() => setModalShow(false)}
                  />
                  <td onClick={summaryHandler}>
                    <img className="eye" src="eye.png" alt="" />
                  </td>
                </tr>

              )}


            </tbody>
          </table>
          <IconContext.Provider value={{ color: '##1a83ff' }}>
            <div className='navbar'>
            </div>
            <nav className={summaryShow ? 'nav-menu active' : 'nav-menu'}>

              <ul className='nav-menu-items' onClick={summaryShow}>

                <li className='navbar-toggle'>
                  <h3>Summary</h3>
                 
                  <Link to='#' className='menu-bars' onClick={summaryHandler}>
                 
                    <AiIcons.AiOutlineClose />
                    
                  </Link>
                  
                </li>
            <div className="store-details">
              <table >
  <thead className="tablehead">
    <tr>
      <th style={{padding:"0px 30px"}}>Store Location</th>
      <th style={{padding:"0px 80px"}}>Store Address:</th>
      <th style={{padding:"0px 80px"}} >Phone</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding:"0px 35px"}}>Jp Nagar</td>
      <td style={{padding:"0px 75px"}}>Near Phone booth, 10th road</td>
      <td style={{padding:"0px 75px"}}>9999999999</td>
     
    </tr>
  
   
  </tbody>
</table>
</div>
<div className="order-status">

  


</div>
<div className="order-summary">
  Order Details <br />
{ordersendData._id}
{ordersendData.email}
{ordersendData.
Subtotal}
{ordersendData.order[0].productname}

{ordersendData.order.map((item, key) => {
                    return item.quantity > 0 ? (
                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col" style={{ width: "35%" }}></th>
                            <th scope="col" style={{ width: "45%" }}></th>
                            <th scope="col" style={{ width: "7%" }}></th>
                            <th scope="col" style={{ width: "10%" }}></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ height: "10%" }}>
                            <th key={key} scope="row">
                              {item.productname}
                            </th>
                            <th
                              key={key}
                              className="d-flex flex-row mt-1 services"
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
                              {/* {setsub(item.total)} */}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <div></div>
                    );
                  })}
</div>
<div className="order-address">
  Address
</div>
<div className="home-address">
  Home
</div>
<div className="cancel-summary" ></div>
{orderData.map((order) =>
<div className= "actual-cancel"   onClick={() => cancelHandler(order._id)}>Cancel</div>
)}

              </ul>
           
            </nav>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Pastorder;

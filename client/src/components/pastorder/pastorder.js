import { useState,useEffect } from "react";
import Header2 from "../header-2/header2";
import Sidebar from "../sidebar/sidebar";
import "./pastorder.css";
import { Modal, CloseButton } from "react-bootstrap";
import axios from "axios";
const Pastorder = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cancelorder, setcancelorder] = useState("Cancel Order");
const [orderData,setorderData]=useState([])

  // useEffect(() => {
  // axios.get("http://localhost:3002/pastorder", {
  //     headers: { Authorization: `${token}` },
  //     data:orderData
  //   })
  //   .then((res) => {
  //     setorderData(res.data)
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }, []);
  useEffect(()=>{
		if(localStorage.getItem('token')){
   
		}
	})
  fetch("http://localhost:3002/pastorder")
  .then((data) => {
    return data.json();

  })
  .then((orderData) => {
  
    setorderData(orderData);
  });



  function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="modal" {...props}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Alert</h4>
            <CloseButton />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to cancel the order No:order1</p>
        </Modal.Body>
        <Modal.Footer>
          <td onClick={props.onHide} animation={false}>
            {" "}
            <button>Proceed</button>
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
        <span className="create">Create</span>
        <div>
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
              <tr>
                {orderData.map((order, i) => {
                  return (
                    <>
                      <td>{order[0}</td>
                      <td>10 OCT 2021, 10:15</td>
                      <td>Jp Nagar</td>
                      <td>Bangalore</td>
                      <td>+919988667755</td>
                      <td>10</td>
                      <td>430 Rs</td>
                      <td>Ready to pickup</td>
                      <td
                        style={{ color: "red", cursor: "-moz-grab" }}
                        variant="secondary"
                        onClick={() => [setModalShow(true), setcancelorder("")]}
                      >
                        {cancelorder}
                      </td>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                      <td>VisibilityIcon</td>
                    </>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pastorder;

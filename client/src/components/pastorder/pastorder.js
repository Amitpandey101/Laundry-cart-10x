

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Header2 from "../header-2/header2";
import Sidebar from "../sidebar/sidebar";
import "./pastorder.css";
import axios from "axios";

import { Modal, CloseButton } from "react-bootstrap";

const Pastorder = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cancelorder, setcancelorder] = useState("Cancel Order");
  const [orderData, setorderData] = useState([]);
  const [order, setorder] = useState("");
  const history = useHistory();
  // const Routehandler = () =>{
  //   history.push('/createorder')
  // }
  const createorderHandler = () => {
    history.push("/createorder");
  };
  // const summaryHandler = () => {
  //   history.push("/summary");
  // };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    axios
      .get("http://localhost:3001/pastorder", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((data) => {
        setorderData(data.data.orders)
        
      });
  }, []);
  console.log(orderData[0])


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="modal-past" {...props}>
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
            {" "}
            <button className="buttonalign">Proceed</button>
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
        {/* {!order && (
                  <p className="d-flex flex-column justify-content-center align-items-center">
                    No orders available{" "}
                    <button
                      type="button"
                      className="btn create"
                      style={{
                        border: "2px solid #5861AE",
                        backgroundColor: "white",
                        color: "#5861AE",
                        padding: "5px 15px",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={Routehandler}
                    >
                      Create
                    </button>
                  </p>
                )} */}
        <span className="order">Orders | 0</span>
        <span className="box-create"></span>
        <span
          className="create"
          onClick={createorderHandler}
          style={{ cursor: "pointer" }}
        >
          Create
        </span>
        <div>
          <span className="search"></span>
          <span className="Search-box">_______________</span>

          <table className="table table-past-order">
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
              <tr>

                <td>order 1</td>
                <td>10 OCT 2021, 10:15</td>
                <td>Jp Nagar</td>
                <td>Bangalore</td>
                <td>+919988667755</td>
                <td>10</td>
                <td>430 Rs</td>
                <td>Ready to pickup</td>
                <td
                  style={{ color: "red", cursor: "pointer" }}
                  variant="secondary"
                  onClick={() => [setModalShow(true), setcancelorder("")]}
                >
                  {cancelorder}
                </td>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <td>
                  <img className="eye" src="eye.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

};

export default Pastorder;

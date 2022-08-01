import React from 'react'
import Header2 from '../header-2/header2'
import Sidebar from '../sidebar/sidebar'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Pastorder = () => {
    const [order,setorder] = useState('')
    const history = useHistory()
    const Routehandler = () =>{
      history.push('/createorder')
    }

    return (
      <>
        <Header2></Header2>
        <div className="box">
          <div className="row ">
            <div className="col-lg-1 col-md-1 p-0">
              <Sidebar></Sidebar>
            </div>
            <div className="col-lg-11 d-flex justify-content-center align-items-center">
              {/* Remaining Sections  */}
              <div className="container">
                {!order && (
                  <p className="d-flex flex-column justify-content-center align-items-center">
                    No orders available{" "}
                    <button
                      type="button"
                      class="btn create"
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
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Pastorder;
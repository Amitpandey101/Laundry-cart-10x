import React from "react";
import Header2 from "../header-2/header2";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./createorder.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import axios from "axios";

const address = {
  JPNagar: "Near Phone booth, 10th road,",
};

const Createorder = () => {
  const [store, setstore] = useState(false);

  const [sidebar, setSidebar] = useState(true);

  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [w, setw] = useState(0);
  const [i, seti] = useState(0);
  const [t, sett] = useState(0);
  const [b, setb] = useState(0);
  const [colorw, setcolorw] = useState(true);
  const [colori, setcolori] = useState(true);
  const [colort, setcolort] = useState(true);
  const [colorb, setcolorb] = useState(true);

  const [showt, setShowt] = useState(false);
  const [pricet, setPricet] = useState(0);
  const [inputValuet, setInputValuet] = useState("");
  const [wt, setwt] = useState(0);
  const [it, setit] = useState(0);
  const [tt, settt] = useState(0);
  const [bt, setbt] = useState(0);
  const [colorwt, setcolorwt] = useState(true);
  const [colorit, setcolorit] = useState(true);
  const [colortt, setcolortt] = useState(true);
  const [colorbt, setcolorbt] = useState(true);

  const [showtr, setShowtr] = useState(false);
  const [pricetr, setPricetr] = useState(0);
  const [inputValuetr, setInputValuetr] = useState("");
  const [wtr, setwtr] = useState(0);
  const [itr, setitr] = useState(0);
  const [ttr, setttr] = useState(0);
  const [btr, setbtr] = useState(0);
  const [colorwtr, setcolorwtr] = useState(true);
  const [coloritr, setcoloritr] = useState(true);
  const [colorttr, setcolorttr] = useState(true);
  const [colorbtr, setcolorbtr] = useState(true);

  const handleChange = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShow(true);
      setPrice(event.target.value);
    } else {
      setShow(false);
      setPrice();
    }
  };
  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  };
  const costvaluew = () => {
    if (colorw === true) {
      setw(10);
    } else {
      setw(0);
    }
  };
  const costvaluei = () => {
    if (colori === true) {
      seti(10);
    } else {
      seti(0);
    }
  };
  const costvaluet = () => {
    if (colort === true) {
      sett(15);
    } else {
      sett(0);
    }
  };
  const costvalueb = () => {
    if (colorb === true) {
      setb(20);
    } else {
      setb(0);
    }
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("");
    setShow(false);
    setPrice(0);
    setcolorw(true);
    setcolori(true);
    setcolort(true);
    setcolorb(true);
    setw(0);
    seti(0);
    sett(0);
    setb(0);
  };

  const handleChanget = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowt(true);
      setPricet(event.target.value);
    } else {
      setShowt(false);
      setPricet();
    }
  };
  const handleUserInputt = (event) => {
    setInputValuet(event.target.value);
  };
  const costvaluewt = () => {
    if (colorwt === true) {
      setwt(10);
    } else {
      setwt(0);
    }
  };
  const costvalueit = () => {
    if (colorit === true) {
      setit(10);
    } else {
      setit(0);
    }
  };
  const costvaluett = () => {
    if (colortt === true) {
      settt(15);
    } else {
      settt(0);
    }
  };
  const costvaluebt = () => {
    if (colorbt === true) {
      setbt(20);
    } else {
      setbt(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldt = () => {
    setInputValuet("");
    setShowt(false);
    setPricet(0);
    setcolorwt(true);
    setcolorit(true);
    setcolortt(true);
    setcolorbt(true);
    setwt(0);
    setit(0);
    settt(0);
    setbt(0);
  };

  const handleChangetr = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowtr(true);
      setPricetr(event.target.value);
    } else {
      setShowtr(false);
      setPricetr();
    }
  };
  const handleUserInputtr = (event) => {
    setInputValuetr(event.target.value);
  };
  const costvaluewtr = () => {
    if (colorwtr === true) {
      setwtr(15);
    } else {
      setwtr(0);
    }
  };
  const costvalueitr = () => {
    if (coloritr === true) {
      setitr(15);
    } else {
      setitr(0);
    }
  };
  const costvaluettr = () => {
    if (colorttr === true) {
      setttr(20);
    } else {
      setttr(0);
    }
  };
  const costvaluebtr = () => {
    if (colorbtr === true) {
      setbtr(25);
    } else {
      setbtr(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldtr = () => {
    setInputValuetr("");
    setShowtr(false);
    setPricetr(0);
    setcolorwtr(true);
    setcoloritr(true);
    setcolorttr(true);
    setcolorbtr(true);
    setwtr(0);
    setitr(0);
    setttr(0);
    setbtr(0);
  };

  const [showj, setShowj] = useState(false);
  const [pricej, setPricej] = useState(0);
  const [inputValuej, setInputValuej] = useState("");
  const [wj, setwj] = useState(0);
  const [ij, setij] = useState(0);
  const [tj, settj] = useState(0);
  const [bj, setbj] = useState(0);
  const [colorwj, setcolorwj] = useState(true);
  const [colorij, setcolorij] = useState(true);
  const [colortj, setcolortj] = useState(true);
  const [colorbj, setcolorbj] = useState(true);
  const handleChangej = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowj(true);
      setPricej(event.target.value);
    } else {
      setShowj(false);
      setPricej();
    }
  };
  const handleUserInputj = (event) => {
    setInputValuej(event.target.value);
  };
  const costvaluewj = () => {
    if (colorwj === true) {
      setwj(15);
    } else {
      setwj(0);
    }
  };
  const costvalueij = () => {
    if (colorij === true) {
      setij(15);
    } else {
      setij(0);
    }
  };
  const costvaluetj = () => {
    if (colortj === true) {
      settj(20);
    } else {
      settj(0);
    }
  };
  const costvaluebj = () => {
    if (colorbj === true) {
      setbj(25);
    } else {
      setbj(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldj = () => {
    setInputValuej("");
    setShowj(false);
    setPricej(0);
    setcolorwj(true);
    setcolorij(true);
    setcolortj(true);
    setcolorbj(true);
    setwj(0);
    setij(0);
    settj(0);
    setbj(0);
  };
  const [showb, setShowb] = useState(false);
  const [priceb, setPriceb] = useState(0);
  const [inputValueb, setInputValueb] = useState("");
  const [wb, setwb] = useState(0);
  const [ib, setib] = useState(0);
  const [tb, settb] = useState(0);
  const [bb, setbb] = useState(0);
  const [colorwb, setcolorwb] = useState(true);
  const [colorib, setcolorib] = useState(true);
  const [colortb, setcolortb] = useState(true);
  const [colorbb, setcolorbb] = useState(true);
  const handleChangeb = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowb(true);
      setPriceb(event.target.value);
    } else {
      setShowb(false);
      setPriceb();
    }
  };
  const handleUserInputb = (event) => {
    setInputValueb(event.target.value);
  };
  const costvaluewb = () => {
    if (colorwb === true) {
      setwb(15);
    } else {
      setwb(0);
    }
  };
  const costvalueib = () => {
    if (colorib === true) {
      setib(15);
    } else {
      setib(0);
    }
  };
  const costvaluetb = () => {
    if (colortb === true) {
      settb(25);
    } else {
      settb(0);
    }
  };
  const costvaluebb = () => {
    if (colorbb === true) {
      setbb(30);
    } else {
      setbb(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldb = () => {
    setInputValueb("");
    setShowb(false);
    setPriceb(0);
    setcolorwb(true);
    setcolorib(true);
    setcolortb(true);
    setcolorbb(true);
    setwb(0);
    setib(0);
    settb(0);
    setbb(0);
  };
  const [showg, setShowg] = useState(false);
  const [priceg, setPriceg] = useState(0);
  const [inputValueg, setInputValueg] = useState("");
  const [wg, setwg] = useState(0);
  const [ig, setig] = useState(0);
  const [tg, settg] = useState(0);
  const [bg, setbg] = useState(0);
  const [colorwg, setcolorwg] = useState(true);
  const [colorig, setcolorig] = useState(true);
  const [colortg, setcolortg] = useState(true);
  const [colorbg, setcolorbg] = useState(true);
  const handleChangeg = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowg(true);
      setPriceg(event.target.value);
    } else {
      setShowg(false);
      setPriceg();
    }
  };
  const handleUserInputg = (event) => {
    setInputValueg(event.target.value);
  };
  const costvaluewg = () => {
    if (colorwg === true) {
      setwg(20);
    } else {
      setwg(0);
    }
  };
  const costvalueig = () => {
    if (colorig === true) {
      setig(20);
    } else {
      setig(0);
    }
  };
  const costvaluetg = () => {
    if (colortg === true) {
      settg(25);
    } else {
      settg(0);
    }
  };
  const costvaluebg = () => {
    if (colorbg === true) {
      setbg(30);
    } else {
      setbg(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldg = () => {
    setInputValueg("");
    setShowg(false);
    setPriceg(0);
    setcolorwg(true);
    setcolorig(true);
    setcolortg(true);
    setcolorbg(true);
    setwg(0);
    setig(0);
    setig(0);
    settg(0);
  };
  const [showo, setShowo] = useState(false);
  const [priceo, setPriceo] = useState(0);
  const [inputValueo, setInputValueo] = useState("");
  const [wo, setwo] = useState(0);
  const [io, setio] = useState(0);
  const [to, setto] = useState(0);
  const [bo, setbo] = useState(0);
  const [colorwo, setcolorwo] = useState(true);
  const [colorio, setcolorio] = useState(true);
  const [colorto, setcolorto] = useState(true);
  const [colorbo, setcolorbo] = useState(true);
  const handleChangeo = (event) => {
    if (parseInt(event.target.value) > 0) {
      setShowo(true);
      setPriceo(event.target.value);
    } else {
      setShowo(false);
      setPriceo();
    }
  };
  const handleUserInputo = (event) => {
    setInputValueo(event.target.value);
  };
  const costvaluewo = () => {
    if (colorwo === true) {
      setwo(25);
    } else {
      setwo(0);
    }
  };
  const costvalueio = () => {
    if (colorio === true) {
      setio(25);
    } else {
      setio(0);
    }
  };
  const costvalueto = () => {
    if (colorto === true) {
      setto(30);
    } else {
      setto(0);
    }
  };
  const costvaluebo = () => {
    if (colorbo === true) {
      setbo(35);
    } else {
      setbo(0);
    }
  };

  // Reset Input Field handler
  const resetInputFieldo = () => {
    setInputValueo("");
    setShowo(false);
    setPriceo(0);
    setcolorwo(true);
    setcolorio(true);
    setcolorto(true);
    setcolorbo(true);
    setwo(0);
    setio(0);
    setto(0);
    setbo(0);
  };

  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
  }, []);

  const orderData = [
    {
      productname: "Shirts",
      washtype: { Washing: w, Ironing: i, Dryclean: t, Chemicalwash: b },
      quantity: price,
      total: price * (w + i + t + b),
      cost: w + i + t + b,
    },
    {
      productname: "T-Shirts",
      washtype: { Washing: wt, Ironing: it, Dryclean: tt, Chemicalwash: bt },
      quantity: pricet,
      total: pricet * (wt + it + tt + bt),
      cost: wt + it + tt + bt,
    },
    {
      productname: "Trousers",
      washtype: {
        Washing: wtr,
        Ironing: itr,
        Dryclean: ttr,
        Chemicalwash: btr,
      },
      quantity: pricetr,
      total: pricetr * (wtr + itr + ttr + btr),
      cost: wtr + itr + ttr + btr,
    },
    {
      productname: "Jeans",
      washtype: { Washing: wj, Ironing: ij, Dryclean: tj, Chemicalwash: bj },
      quantity: pricej,
      total: pricej * (wj + ij + tj + bj),
      cost: wj + ij + tj + bj,
    },
    {
      productname: "Boxers",
      washtype: { Washing: wg, Ironing: ig, Dryclean: tg, Chemicalwash: bg },
      quantity: priceg,
      total: priceg * (wg + ig + tg + bg),
      cost: wg + ig + tg + bg,
    },
    {
      productname: "Joggers",
      washtype: { Washing: wb, Ironing: ib, Dryclean: tb, Chemicalwash: bb },
      quantity: priceb,
      total: priceb * (wb + ib + tb + bb),
      cost: wb + ib + tb + bb,
    },
    {
      productname: "Others",
      washtype: { Washing: wo, Ironing: io, Dryclean: to, Chemicalwash: bo },
      quantity: priceo,
      total: priceo * (wo + io + to + bo),
      cost: wo + io + to + bo,
    },
  ];

  const [sub, setsub] = useState(0);

  const subval = () => {
    let arr = [];
    orderData.forEach((e) => arr.push(e.total));
    let sum = 0;
    arr.forEach((x) => {
      sum += x;
    });
    setsub(sum);
    console.log(arr.length)
  };
  

  const ShowSidebar = () => {
    setSidebar(!sidebar);
    console.log(orderData);
  };
  const history = useHistory();
  const cancelorderHandler = () => {
    history.push("/pastorder");
  };

  const [opacity, SetOpacity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // toggle
    setIsActive((current) => !current);
  };

  //database connection and object
  const onconfirmhandler = () =>{
    const newOrder={ email:userEmail, order:orderData , Subtotal:sub , Total:sub+90}
    axios.post('http://localhost:3001/createorder',{data:{data:newOrder},headers: { authorization: localStorage.getItem("token") }})
    .then((res) => {
      console.log(res.data)
      if(res.data.message.includes('successfully')){
        console.log('order sent successfully')
        console.log(newOrder)
        alert(res.data.message)
      }else{

        alert(res.data.error)
      }
    
      
      
      
    })
    .catch((error)=>{console.log(error)})
  
  }


  


 


  return (
    <>
      <div
      className="page-document"
        style={{
          opacity,
          backgroundColor: isActive ? "grey" : "",
          color: isActive ? "grey" : "",
          position: isActive ? "fixed" : ""
          // display: isActive ? "none" : ""
        }}
      >
        <Header2></Header2>
        <div className="box">
          <div className="row">
            <div className="col-lg-1 col-md-1 p-0">
              <Sidebar></Sidebar>
            </div>

            <div className="col-lg-11">
              {/* Remaining Sections  */}
              <div className="container">
                <p>Create order </p>
                <table class="table" style={{ border: "1px solid #E0E0E0" }}>
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col" style={{ width: "35%" }}>
                        Product Types
                      </th>
                      <th scope="col" style={{ width: "16.66%" }}>
                        Quantity
                      </th>
                      <th scope="col" style={{ width: "25%" }}>
                        Wash Type
                      </th>
                      <th scope="col" style={{ width: "13%" }}>
                        Price
                      </th>
                      <th scope="col" style={{ width: "10.33%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Shirts</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValue}
                          onChange={(event) => {
                            handleChange(event);
                            handleUserInput(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorw(!colorw);
                              costvaluew();
                            }}
                          >
                            {colorw ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolori(!colori);
                              costvaluei();
                            }}
                          >
                            {colori ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolort(!colort);
                              costvaluet();
                            }}
                          >
                            {colort ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorb(!colorb);
                              costvalueb();
                            }}
                          >
                            {colorb ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {show ? (
                          <div>
                            {price} x {w + i + t + b}=
                            <span className="totalvalue">
                              {" "}
                              {price * (w + i + t + b)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {show && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputField}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>T-Shirts</span>
                            <div className="description">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt beatae accusantium nihil!
                            </div>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValuet}
                          onChange={(event) => {
                            handleChanget(event);
                            handleUserInputt(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwt(!colorwt);
                              costvaluewt();
                            }}
                          >
                            {colorwt ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorit(!colorit);
                              costvalueit();
                            }}
                          >
                            {colorit ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolortt(!colortt);
                              costvaluett();
                            }}
                          >
                            {colortt ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbt(!colorbt);
                              costvaluebt();
                            }}
                          >
                            {colorbt ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showt ? (
                          <div>
                            {pricet} x {wt + it + tt + bt}=
                            <span className="totalvalue">
                              {" "}
                              {pricet * (wt + it + tt + bt)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showt && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldt}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Trousers</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValuetr}
                          onChange={(event) => {
                            handleChangetr(event);
                            handleUserInputtr(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwtr(!colorwtr);
                              costvaluewtr();
                            }}
                          >
                            {colorwtr ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcoloritr(!coloritr);
                              costvalueitr();
                            }}
                          >
                            {coloritr ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorttr(!colorttr);
                              costvaluettr();
                            }}
                          >
                            {colorttr ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbtr(!colorbtr);
                              costvaluebtr();
                            }}
                          >
                            {colorbtr ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showtr ? (
                          <div>
                            {pricetr} x {wtr + itr + ttr + btr}=
                            <span className="totalvalue">
                              {" "}
                              {pricetr * (wtr + itr + ttr + btr)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showtr && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldtr}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Jeans</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValuej}
                          onChange={(event) => {
                            handleChangej(event);
                            handleUserInputj(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwj(!colorwj);
                              costvaluewj();
                            }}
                          >
                            {colorwj ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorij(!colorij);
                              costvalueij();
                            }}
                          >
                            {colorij ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolortj(!colortj);
                              costvaluetj();
                            }}
                          >
                            {colortj ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbj(!colorbj);
                              costvaluebj();
                            }}
                          >
                            {colorbj ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showj ? (
                          <div>
                            {pricej} x {wj + ij + tj + bj}=
                            <span className="totalvalue">
                              {" "}
                              {pricej * (wj + ij + tj + bj)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showj && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldj}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Boxers</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValueg}
                          onChange={(event) => {
                            handleChangeg(event);
                            handleUserInputg(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwg(!colorwg);
                              costvaluewg();
                            }}
                          >
                            {colorwg ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorig(!colorig);
                              costvalueig();
                            }}
                          >
                            {colorig ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolortg(!colortg);
                              costvaluetg();
                            }}
                          >
                            {colortg ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbg(!colorbg);
                              costvaluebg();
                            }}
                          >
                            {colorbg ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showg ? (
                          <div>
                            {priceg} x {wg + ig + tg + bg}=
                            <span className="totalvalue">
                              {" "}
                              {priceg * (wg + ig + tg + bg)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showg && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldg}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Joggers</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValueb}
                          onChange={(event) => {
                            handleChangeb(event);
                            handleUserInputb(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwb(!colorwb);
                              costvaluewb();
                            }}
                          >
                            {colorwb ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorib(!colorib);
                              costvalueib();
                            }}
                          >
                            {colorib ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolortb(!colortb);
                              costvaluetb();
                            }}
                          >
                            {colortb ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbb(!colorbb);
                              costvaluebb();
                            }}
                          >
                            {colorbb ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showb ? (
                          <div>
                            {priceb} x {wb + ib + tb + bb}=
                            <span className="totalvalue">
                              {" "}
                              {priceb * (wb + ib + tb + bb)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showb && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldb}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="product-row">
                        {" "}
                        <span to="/" className="nav-link cust-link-product">
                          <span className="user-acc">
                            <img
                              className="product-img"
                              src="./acc.png"
                              alt=""
                            />
                          </span>
                          <div className="product-name">
                            <span>Others</span>
                            <span className="description">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate, dolorem?
                            </span>
                          </div>
                        </span>
                      </th>
                      <td className="input-box">
                        <input
                          type="number"
                          min="0"
                          value={inputValueo}
                          onChange={(event) => {
                            handleChangeo(event);
                            handleUserInputo(event);
                          }}
                          style={{ width: "50%", textAlign: "center" }}
                        ></input>
                      </td>
                      <td>
                        <div className="d-flex flex-row justify-content-around">
                          <div
                            onClick={() => {
                              setcolorwo(!colorwo);
                              costvaluewo();
                            }}
                          >
                            {colorwo ? (
                              <img
                                className="service-icon"
                                src="./washing-machine.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./washing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorio(!colorio);
                              costvalueio();
                            }}
                          >
                            {colorio ? (
                              <img
                                className="service-icon"
                                src="./ironing.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./ironing-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorto(!colorto);
                              costvalueto();
                            }}
                          >
                            {colorto ? (
                              <img
                                className="service-icon"
                                src="./towel.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./towel-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              setcolorbo(!colorbo);
                              costvaluebo();
                            }}
                          >
                            {colorbo ? (
                              <img
                                className="service-icon"
                                src="./bleach.svg"
                                alt="service-icon"
                              ></img>
                            ) : (
                              <img
                                className="service-icon"
                                src="./bleach-blue.svg"
                                alt="service-icon"
                              ></img>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        {showo ? (
                          <div>
                            {priceo} x {wo + io + to + bo}=
                            <span className="totalvalue">
                              {" "}
                              {priceo * (wo + io + to + bo)}
                            </span>
                          </div>
                        ) : (
                          <div style={{ color: "#605959" }}>—</div>
                        )}
                      </td>
                      <td>
                        {showo && (
                          <button
                            type="button"
                            class="btn reset"
                            id="reset"
                            onClick={resetInputFieldo}
                            style={{
                              border: "1px solid #5861AE",
                              backgroundColor: "white",
                              color: "#5861AE",
                              padding: "4px 15px",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex flex-row justify-content-end mb-3">
                  <button
                    type="button"
                    className="btn mr-3"
                    style={{
                      border: "1px solid #5861AE",
                      backgroundColor: "white",
                      color: "#5861AE",
                      padding: "2px 20px",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                    onClick={cancelorderHandler}
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    class="btn"
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
                    onClick={() => {
                      SetOpacity(0.5);
                      ShowSidebar();
                      handleClick();
                      subval();
                    }}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <p>Summary</p>
                <Link
                  to="#"
                  className="menu-bars"
                  onClick={() => {
                    SetOpacity(1);
                    ShowSidebar();
                    handleClick();
                  }}
                >
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className="d-flex flex-row justify-content-around align-items-center store-info">
                <select
                  className="custom"
                  onChange={(e) => {
                    setstore(!store);
                  }}
                >
                  <option value=""></option>
                  <option value="JPNager">JP Nager</option>
                </select>

                <div className="d-flex flex-column pr-2">
                  <div>
                    <b>Store address:</b>
                    {store && <div> {address.JPNagar}</div>}
                  </div>
                </div>
                <div>
                  <b>Phone: </b> {store && <div>91 9999999999</div>}
                </div>
              </li>
              <div className="table-summary">
                Order Details
                <div>
                  {orderData.map((item, key) => {
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
                <span className="d-flex flex-row justify-content-end align-items-center mr-4 pr-3 charges">Sub total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{sub}</b></span>
                <span className="d-flex flex-row justify-content-end align-items-center mr-4 pr-3 charges">Pickup charges:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>90</b></span>
                <div className="d-flex flex-row justify-content-end align-items-center mr-5 pr-3 grandtotal">Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs{sub+90}</div>
                <p className="pt-4">Address</p>
                <div></div>
               

              </div>
              <div className="d-flex flex-row justify-content-end align-items-center mr-4 pr-5 summaryend">{store && <button
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
                    onClick={()=>{
                      onconfirmhandler();
                    }}
                  >
                    Confirm
                  </button>}</div>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Createorder;

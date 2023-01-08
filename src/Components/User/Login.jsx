import React, { useRef, useState } from "react";
import "./Login.css";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";






const Form=( props )=>{

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();



    const loginUser = async () => {
        if(email.current.value != "" && password.current.value != "") {
            await axios.post("https://rubixe-backend-production.up.railway.app/login", {
                email: email.current.value,
                password: password.current.value
            })
            .then((res) =>{
                const str = JSON.stringify(res.data);
                if(str != "Incorrect Email or Password" && str != "error occured" && str != "invalid token" && str != "token expired"){

                    if(res.data.email == "adminalpha101@rubixe.com"){
                        localStorage.setItem('jwt', res.data.jwt);
                        props.setData(res.data);
                        navigate("/adminpage");
                        return;
                    } else {
                        console.log(res.data);
                        props.setData(res.data);
                        localStorage.setItem("jwt", res.data.jwt);
                        navigate("/");
                        return;
                    }

                    
                } else {
                    alert(JSON.stringify(res.data));
                }

            }).catch((err) => {
                console.log(err);
            })
        }
    }
    
        return(
        <>
            <div  className="container">
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            <img src="https://imgur.com/XaTWxJX.jpg" />
                        </div>
    
                        <div className="right-side">

                        <div className="register">
                                <p>Not a member? <button><Link to="/signup">Register</Link></button></p>
                            </div>
                            
    
                            <div className="hello">
                                <h2>Hello Again!</h2>
                                <h4>Welcome back you have been missed! </h4>
                            </div>
    
                                <div className="input_text">
                                    <input className="" ref={email} type="text" placeholder="Enter Email" name="email" />
                                </div>
                                <div className="input_text">
                                    <input className="" ref={password} type="password" placeholder="Enter Password" name="password" />
                                </div>
                                <div className="recovery">
                                    <p>Recovery Password</p>
                                </div>
                                <div style={{width: "100%"}} className="btn">
                                    <button onClick={loginUser} style={{fontSize: "1rem", fontWeight: "700"}} >Sign in</button>
                                </div>
    
            
                            <hr />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </>
        );
        }


export default Form;
        
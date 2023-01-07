import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import Footer from "../Home/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form=()=>{
    const navigate = useNavigate();
    const email = useRef();
    const fname = useRef();
    const profilePic = useRef();
    const country = useRef();
    const password = useRef();
    const password2 = useRef();





    const registerUser = async () => {
        
        if((email.current.value != "") && (fname.current.value != "") && (password.current.value != "") && (password.current.value == password2.current.value)) {
            axios.post("https://rubixe-backend-production.up.railway.app/register", {
                email: email.current.value,
                name: fname.current.value,
                img_url: profilePic.current.value,
                password: password.current.value,
                country: country.current.value
            }).then((res) => {
                console.log(res.data);
                if(res.data == "Registered Successfully"){
                alert(res.data)
                navigate("/login");
                } else {
                    alert(res.data);
                }
            }).catch((err) => {
                console.log(err);
            }
                )
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
                            <div className="hello">
                                <h2>Let's Start</h2>
                                
                            </div>
    

    
                                <div className="input_text">
                                    <input style={{border: "none"}} className="" type="text" ref={email} placeholder="Enter Email" name="email" required/>
                                </div>
                                <div className="input_text">
                                    <input style={{border: "none"}} className="" type="text" ref={fname} placeholder="Full Name" name="password" required/>
                                    
                                </div>
                                <div className="input_text">
                                    <input style={{border: "none"}} className="" type="text" ref={profilePic} placeholder="your profile pic url" name="img_url" required/>
                                    
                                </div>
                                <div className="input_text">
                                    <select style={{border: "none"}} name="" id="" ref={country}>
                                        <option value="">Country</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="France">France</option>
                                        <option value="Autralia">Autralia</option>
                                        <option value="China">China</option>
                                        <option value="Russia">Russia</option>
                                    </select>
                                    
                                </div>
                                <div className="input_text">
                                    <input style={{border: "none"}} className= "" type="password" ref={password} placeholder="Enter Password" name="password" required/>
                                    
                                </div>
                                <div className="input_text">
                                    <input style={{border: "none"}} className="" type="password" ref={password2} placeholder="re-enter Password" name="password" required/>
                                
                                </div>
                                <div style={{width: "100%"}} className="btn">
                                    <button  style={{fontSize: "1rem", fontWeight: "700"}} onClick={registerUser}>Sign Up</button>
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
        
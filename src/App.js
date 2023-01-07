import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Banner from './Components/Home/Banner';
import Home from './Components/Home/Home';
import Login from "./Components/User/Login";
import Form from "./Components/User/Signup";
import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';



function App() {

  const [user, updateUser] = useState({});

  const setUser = (obj) => {
    updateUser(obj);
  }

  useEffect(() => {
    try{
      if(localStorage.getItem("jwt")) {
        axios.get("https://rubixe-backend-production.up.railway.app/login/validate", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      }).then((res) => {
        if((res.data != "invalid token") && (res.data != "error occured") && (res.data != "token expired")) {
          updateUser(res.data);
          alert("Welcome Back")
        }
      }).catch((err) => {
        console.log(err);
      })
      } else {
        alert("some error occured")
      }
    } catch(e) {
      console.log(e);
    }
  }, [])


  return (
    <BrowserRouter>
    <Navbar user={user} setUser={setUser}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login setData={setUser}/>} />
      <Route path="/signup" element={<Form/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;



import React from 'react';
import "../Styles/Navbar.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import $ from "jquery";
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const [toggler, setToggler] = useState(true);
  const [userData, updateUserData] = useState({});
  const navigate = useNavigate();

  

  useEffect(() => {
    if(Object.keys(props.user).length != 0) {
      setToggler(false);
      updateUserData(props.user);
    }
  }, [props.user]);


  useEffect(() => {
    $(function() {
      $("#profile").mouseenter(function() {
        $("#expand").css({
          position: "absolute",
          display: "inline",
          color: "black",
          backgroundColor: "white"
        });
      }).mouseleave(function () {
        $("#expand").css({
          display: "none"
        });
      })
    });
  }, [toggler]);

  const logout = () => {
    props.setUser({});
    localStorage.removeItem("jwt")
    alert("User Logged Out");
    setToggler(true);
    navigate('/');
    return;
  }


  return (
    <div className='navbar-main'>
        <div>
            <img className='navbar-logo' src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="" />
        </div>

        <div className='navbar-items'>
            <div><Link to="/"><button>Home</button></Link></div>
            <div><button>Services</button></div>
            <div><button>Products</button></div>
            <div><button>AI Internship</button></div>
            <div><button>Career</button></div>
            <div><button>About</button></div>
            <div><button>Contact Us</button></div>
            <div>
              {toggler ? <div><Link to="/login"><button>Login</button></Link></div> : <div id="profile">
                <img style={{width: "20px"}} src={userData.img_url} alt="" />
                {(userData.name).split(" ")[0]}
                <br /><br/>
                <div style={{display: "none"}} id="expand">
                  <button onClick={logout} style={{color: "black", padding: "10px 40px", borderRadius: "10px"}}>Logout</button>
                </div>
              </div>}
              </div>
        </div>
    </div>
  )
}

export default Navbar;
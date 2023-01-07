import React from 'react';
import "../../Styles/Features.css";
import computer from "../../Resources/computer.png"

const Features = () => {
  return (
    <div className='features-main'>
        <div className='features-box'>

            <div className='first'>
                <h3>WHERE WE STARTED</h3>
                <p>Started in 2008, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.</p>
            </div>

            <div className='second'>
                <br />
                <br />
                <h3>TECH FOR TEENS - A RUBIXE INITIATIVE</h3>
                <br />
                <br />
                <br />
                <div className='feature-card-flexbox'>
                    <div className='up-card' style={{borderTop: "35px solid #293491"}}>
                        <div className='card-number-u' style={{color: "#293491"}}>01</div>
                        
                        <br />
                        <img style={{width: "30%"}} src={computer} alt="" />
                        <p>Introducing AI to the Children in an age appropriate manner</p>
                    </div>

                    <div  className='down-card' style={{borderBottom: "35px solid maroon"}}>
                        
                        <p>Introducing AI to the Children in an age appropriate manner</p>
                        <img style={{width: "30%"}} src={computer} alt="" />
                        <br /> <br /> <br />
                        
                        <div className='card-number-d' style={{color: "maroon"}}>02</div>
                    </div>

                    <div className='up-card' style={{borderTop: "35px solid darkorange"}}>
                        <div className='card-number-u' style={{color: "darkorange"}}>03</div>
                       
                        <br />
                        <img style={{width: "30%"}} src={computer} alt="" />
                        <p>Introducing AI to the Children in an age appropriate manner</p>
                    </div>

                    <div className='down-card' style={{borderBottom: "35px solid darkgreen"}}>
                        
                        <p>Introducing AI to the Children in an age appropriate manner</p>
                        <img style={{width: "30%"}} src={computer} alt="" />
                        <br /> <br /> <br />
                       
                        <div className='card-number-d' style={{color: "darkgreen"}}>04</div>
                    </div>

                    <div className='up-card' style={{borderTop: "35px solid #D1965B"}}>
                        <div className='card-number-u' style={{color: "#D1965B"}}>05</div>
                        
                        <br />
                        <img style={{width: "30%"}} src={computer} alt="" />
                        <p>Introducing AI to the Children in an age appropriate manner</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Features;
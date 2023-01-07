import React from 'react';
import gif from  "../../Resources/wwr.gif";
import "../../Styles/Aboutus.css";

const AboutUs = () => {
  return (
    <div className='about-us-main'>
        <div className="about-us-flexbox">
            <div className='about-us-flexitem-1'>
                <div><h3>Who We Are?</h3></div>
                <p>We are passionate about enabling business with game changing solutions through disrupting technologies. Rubixe team has a expertise in delivering enterprise level solutions in the field of Artificial Intelligence AI, Robotic Process Automation RPA and Internet of Things IoT. We have decades of experience in technology consulting, helping businesses innovate with AI, enrich customer insights, automate processes {"&"} be more cost-efficient.
                </p>
                <p>Rubixe provides reliable and high-quality staffing solutions that offer you the ability to build your staff strength without absorbing them full time, assist overloaded employees during critical times, and keep projects moving. Unlike traditional staffing model, Rubixe takes the responsibility of the work being delivered through staffing engagement, so the client can be sure of the deliverables in time, with meeting and exceeding expectations.</p>
            </div>

            <div className='about-us-flexitem-2'>
                <hr />
                <img className='about-us-gif' src={gif} alt="" />
            </div>

        </div>
    </div>
  )
}

export default AboutUs;
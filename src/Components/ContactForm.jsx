import React from 'react';
import "../Styles/ContactForm.css";

const ContactForm = () => {
  return (

    <div className='contact-form-main'>


        <div className='contact-form-flexbox'>

        <div className='form-left'>
            <h2>GET IN TOUCH</h2>
            <h6>Please complete the form we will get back to you</h6>
        </div>

        <div className='form-right'>
            <label htmlFor="">Name*</label>
            <br />
            <input className='inp' type="text" placeholder='Enter Your Name'/>

            <br /><br />

            <label htmlFor="">Email*</label>
            <br />
            <input className='inp' type="email" placeholder='Enter Your Email'/>

            <br /><br />

            <label htmlFor="">Mobile Number*</label>
            <br />
            <input className='inp' type="number" placeholder='Enter Your Number'/>

            <br /><br /> <br />

            <button className='form-btn'>Submit</button>

        </div>

        </div>

       

    </div>
  )
}

export default ContactForm;
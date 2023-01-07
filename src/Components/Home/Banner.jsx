import React from 'react';
import "../../Styles/Banner.css";
import video1 from "../../Resources/rubixe-home-video.mp4"

const Banner = () => {
  return (
    <div className='banner-video-main'>
      <video className='banner-video'  muted autoPlay loop>
      <source src={video1} type="video/mp4" />
      Your Browser does not support the video tag
      </video>
    </div>
  )
}

export default Banner;
import React from "react";
import {useState} from "react";
import Slider from "react-slick";
import image1 from "../../files/logo.png";
import "./Clients.css"
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";

const images = [image1, image1, image1, image1]

function Clients({alt}){

  const NextArrow = ({onClick}) => {
    return(
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight/>
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return(
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft/>
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite:true,
    lazyload:true,
    speed:700,
    slidesToShow:3,
    centerMode:true,
    autoplay:true,
    centerPadding:0,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    beforeChange: (current,next) => setImageIndex(next)
  };

  return(
    <div className={alt ? "clients alt" : "clients"}>
      <div className="center">
     <Slider {...settings}>
       {images.map((img, idx)=>(
         <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'} key={idx}>
           <img src={img} alt={img}/>
           </div>
       ))}
     </Slider>
     </div>
    </div>
  );
}

export default Clients;

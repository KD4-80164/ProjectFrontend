import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Cart = (props)=>{
    return (
        <Link to={`/booking/${props.hotel.hotelId}`} className="cart-link">
      <div className="cart"> 
      <img src={props.hotel.hotelUrl} alt="hotel"></img>
        <h2>{props.hotel.hotelName}</h2>
        <h3>{props.hotel.description}</h3>
        <h3>{props.hotel.address}</h3>
        <h3>{props.hotel.emailId}</h3>
      </div>
    </Link>

    //     <div className="cart">
    //     {/* <img src='https://www.kayak.co.in/rimg/himg/91/a6/82/expediav2-7581419-ca601c-683859.jpg?width=968&height=607&crop=true'></img> */}
    //     <img src={props.hotel.hotelUrl} alt="hotel"></img>
    //     <h2>{props.hotel.hotelName}</h2>
    //     <h3>{props.hotel.description}</h3>
    //     <h3>{props.hotel.address}</h3>
    //     <h3>{props.hotel.emailId}</h3>
    // </div>
    );
};

export default Cart;
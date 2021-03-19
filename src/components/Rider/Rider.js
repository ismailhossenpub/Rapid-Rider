import React from 'react';
import { Link } from 'react-router-dom';
import './Rider.css'

const Rider = (props) => {
    const {name, image}= props.rider;
    return (
        
        <div className="card rider  col-md" style={{width: "18rem", textDecoration:'none'}}>
            <Link to="/login">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 classN="card-title" style={{textAlign:'center', }}>{name}</h5>
            </div>
            </Link>
       </div>
       
    );
};

export default Rider;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Rider.css'

const Rider = (props) => {
    const {name, image,id}= props.rider;
    const history = useHistory();
  const handleClick = (id) => {
    history.push(`/destination/${id}`);
  };
    return (
        
        <div className="card rider  col-md" style={{width: "18rem"}}>
            <Link 
            style={{textDecoration:'none'}} 
            onClick={() => handleClick(id)}
            >
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 classN="card-title" style={{textAlign:'center', }}>{name}</h5>
            </div>
            </Link>
       </div>
       
    );
};

export default Rider;
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import data from "../FakeData/data.json";


const Destination = () => {
    const {id} = useParams();
    const riderData = data.find(ride => ride.id === parseInt(id));
    const [search, setSearch]= useState(true);
    const {name, image, price}=riderData;
    const [dastination, setDastination] = useState({
        from: '',
        to: ''
    })
    const handleDastination = (e) => {
        const newDastination = { ...dastination }
        newDastination[e.target.name] = e.target.value
        setDastination(newDastination)
    }
    return (

        <div className="container row ">
        <div className='col-md-6'>
            <form className='sign-up'>

           { search && <div className="form-group cardBody">
                    <div className=''>
                        <label htmlFor="form" className="form-label text-white">Date</label>
                         <input type="date" className="form-control" placeholder="date" required/>
                    </div>
                    <div className=''>
                        <label htmlFor="form" className="form-label text-white">Pick From</label>
                         <input  onBlur={ handleDastination} name='from' type="text" className="form-control" placeholder="Enter Your From Place" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="form" className="form-label text-white">Pick To</label>
                         <input onBlur={ handleDastination} name='to' type="text" className="form-control" placeholder="Enter Your To Place" required/>
                    </div>
                    <div className='form-group text-center' style={{margin:'10px'}}>
                        <button  onClick={()=> setSearch(false)} type="submit" className="btn btn-primary">Search</button>
                    </div>
            </div>}

           {!search && <div className="form-group">
                           <div className="card-body row-md cardBody" style={{}}>
                                
                               <h2>{dastination.from}</h2>
                               <h2>{dastination.to}</h2>
                            
                          </div>  
                           <div className="card-body row-md cardBody" style={{display:'flex'}}>
                                <div style={{maxWidth:'40%', margin:'10px'}}>
                                <img style={{maxWidth:'100%'}} src={image} alt="no image" />
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                <h3 >{name}</h3>
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                  <h3>{price}</h3>
                                </div>
                            
                            </div>  
                            <div className="card-body row-md cardBody" style={{display:'flex'}}>
                                <div style={{maxWidth:'40%', margin:'10px'}}>
                                <img style={{maxWidth:'100%'}} src={image} alt="no image" />
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                <h3 >{name}</h3>
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                  <h3>{price}</h3>
                                </div>
                            
                            </div>
                            <div className="card-body row-md cardBody" style={{display:'flex'}}>
                                <div style={{maxWidth:'40%', margin:'10px'}}>
                                <img style={{maxWidth:'100%'}} src={image} alt="no image" />
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                <h3 >{name}</h3>
                                </div>
                                <div style={{maxWidth:'40%', margin:'20px', maxHeight:'50px'}}>
                                  <h3>{price}</h3>
                                </div>
                            
                            </div>
                </div>}
                 </form>
                </div>
                <div className='col-md-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d930695.3880192137!2d89.12919296833891!3d24.32806375246765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!3m2!1d24.848077999999997!2d89.3729633!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.810332!2d90.4125181!5e0!3m2!1sen!2sbd!4v1616245206231!5m2!1sen!2sbd" style={{ width:"100%",  height:"500px",border:0,loading:"lazy",allowFullScreen:"" }}  ></iframe>
                </div>
            </div>

    );
};

export default Destination;
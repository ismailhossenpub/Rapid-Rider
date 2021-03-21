import React, { useEffect, useState } from 'react';
import fakeData from "../FakeData/data.json";
import Rider from '../Rider/Rider';
import './Home.css';

const Home = () => {
    const [rider, setRider]= useState([]);
    useEffect(()=>setRider(fakeData),[])
    return (
        <div className='home-rider'>
            <div className='row container' >
                {
                    rider.map(rider=> <Rider rider={rider} key={rider.id}></Rider>)
                }
             </div>
        </div>
        
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import fakeData from "../FakeData/data.json";
import Rider from '../Rider/Rider';

const Home = () => {
    const [rider, setRider]= useState(fakeData);
    useEffect(()=>{
    },[])
    console.log(fakeData);
    return (
        <div className='row home-rider container'>
            {
                rider.map(rider=> <Rider rider={rider}></Rider>)
            }
        </div>
    );
};

export default Home;
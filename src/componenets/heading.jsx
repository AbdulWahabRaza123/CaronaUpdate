import React, { useEffect, useState } from 'react';
import Cases from './cases';
const Heading=()=>{
    let [actualData,setData]=useState([]);
    const getCovidData=async()=>{
        try{
        const res=await fetch('https://data.covid19india.org/data.json');
        const data=await res.json();
        console.log("I am here sir ",data.statewise[0]);
        setData(data.statewise[0]);
        }catch(e){
            console.log("This is error ",e);
        }

    }
    useEffect(()=>{
        getCovidData();
    },[])
    return (
<div className='title text-center'>
            <h1 className="live">🔴 live</h1>
            <h2>Covid-19 CORONA VIRUS Tracker</h2>
            <div className='total-card-area'>
                <Cases name={actualData}/>
                {console.log("This is Our data ",actualData)}
            </div>
</div>
    )
}
export default Heading;
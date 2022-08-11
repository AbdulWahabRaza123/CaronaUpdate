import React from 'react';
const Cases=(props)=>{
    // let date = props.name.lastupdatedtime.split(" ", 1);
    return (
        <>       
         <div className='card'>
                <h1><span>Our </span>COUNTRY</h1>
                <h2>Pakistan</h2>
        </div>
        <div className='card'>
                <h1><span>Total </span>RECOVERED</h1>
                <h2>{props.name.recovered}</h2>
        </div>
        <div className='card'>
                <h1><span>Total </span>CONFIRMED</h1>
                <h2>{props.name.confirmed}</h2>
        </div>
        <div className='card'>
                <h1><span>Total </span>DEATH</h1>
                <h2>{props.name.deaths}</h2>
        </div>
        <div className='card'>
                <h1><span>Total </span>ACTIVE</h1>
                <h2>{props.name.active}</h2>
        </div>
        <div className='card'>
                <h1><span>Last </span>UPDATED</h1>
                
                <p>{props.name.lastupdatedtime}</p>
        </div>


        </>

    )
}
export default Cases;
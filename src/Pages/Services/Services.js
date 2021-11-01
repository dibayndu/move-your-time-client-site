import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-broomstick-47761.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            SetServices(data)
        })
    },[])
    return (
       <div className="container">
           <h1>Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
           {
           services.map(service => <Service key={service._id} data={service}></Service>)
           }
       </div>
       </div>
        
    
    );
};

export default Services;
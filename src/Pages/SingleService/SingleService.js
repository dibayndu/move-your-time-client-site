import React, { useEffect, useState } from 'react';
import { Container, Image, Button  } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
    const {id} = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    useEffect(() => {
        fetch(`https://shrieking-broomstick-47761.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data => setSinglePackage(data))
    })
    const {name, picture,description,duration,price} = singlePackage;
    return (
        <div className="container border mt-5">
            <Container>
            
           <div>
           <Image src={picture} />
           </div>
           <h1>{name}</h1>
           <h3>{description}</h3>
           <p>Duration:{duration}</p>
           <p>Price:${price}</p>
           <Button variant="primary">Confirm</Button>{' '}
           

           </Container>
        </div>
    );
};

export default SingleService;
import React, { useEffect, useState } from 'react';
import { Container, Image, Button, Form  } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleService = () => {
    const {user} = useAuth();
    console.log(user)
    const {id} = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const [number, setnumber] = useState('')
    const [address, setaddress] = useState('')

        useEffect(() => {
        fetch(`https://shrieking-broomstick-47761.herokuapp.com/service/${id}`)
        .then(res=>res.json())
        .then(data => setSinglePackage(data))
    },[])
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
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>User number</Form.Label>
                    <Form.Control type="number" placeholder="018....." value={number} onChange={(e) => setnumber(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>User Address</Form.Label>
                    <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setaddress(e.target.value)}/>
                </Form.Group>
            </Form>
           <Button variant="primary" onClick={() => alert("Order has been confirmed!!")}>Confirm</Button>{' '}
           

           </Container>
        </div>
    );
};

export default SingleService;
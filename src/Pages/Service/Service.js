import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, name, picture, price,description} = props.data;
   
    return (
        <div className="service">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {price}
                    </Card.Text>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Link to={`/service/${_id}`}><button className="btn btn-primary">Get Your Service</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
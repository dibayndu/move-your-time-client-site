import React from 'react';
import { Card } from 'react-bootstrap';
import './More.css';

const More = () => {
    return (
        <div className="container">
            <div>
                <h1>Some Features that Made Us Unique.</h1>
                <p>Who are in extremely love with Eco friendly System.</p>
                </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
    <div className="hover">
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Expert Tour Planner</Card.Title>
    
    <Card.Text>
    Discover the heart of our culture with Expert Guided tours. Have a unique and magical experience with us! It has always been a pleasure to provide the best services to all my prestigious guests on the art
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
        <div className="hover">
            <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title>Great support</Card.Title>
    
    <Card.Text>
    keep up to date with Tourplan news and events. Access: Login (above at top right) to access knowledgebase search, support tickets and training guides.
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="hover">
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Positive Reviews</Card.Title>
    <Card.Text>
    Satisfied Customers are Happy Customers is our motto and we work towards it. We also like to hear from them, regarding our services which keeps us motivated to enhance our services. Here are a few words of praises from our esteemed customers.
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    );
};

export default More;
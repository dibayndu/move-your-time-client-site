import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
  <div className="container mt-5 mb-3">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="secondary" type="submit">
    Submit
  </Button>
</Form>
<h3>------------or--------------</h3>
  </div>
            <button onClick ={signInUsingGoogle} className="btn btn-primary">Google Sign-In</button>
        </div>
    );
};

export default Login;
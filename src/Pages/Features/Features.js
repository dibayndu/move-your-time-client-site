import React from 'react';
import { Table } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="container bg-info p-3 mt-3">
         <div className="d-flex mt-3">
         <div>
            <img
      className="d-block w-100"
      src={'https://img.vectorfair.com/JEMA-FAMO/JEMA%20FAMO%20415%20220419/TM_JEMA%20FAMO%20415-24.jpg'}
      alt="Second slide"
    />
    </div>
    <div className="mt-5 text-center p-3">
        <h1>Make your budget</h1>
        <p>Budget your tour according your savings,open installment packages</p>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
            
         </div>
        </div>
    );
};

export default Features;
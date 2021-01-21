import React from "react";
// import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';


const HomePage = () => {
  return (
          <div >
            <Card classNem='mb3'style={{color:"#000"}}>
              <Card.Img src="https://www.memozor.com/templates/memoire/images/memory_game_kids_stencil_3.jpg" alt='image' />
              <Card.Body/>  
            </Card>
            {/* <img src="Heart.jpg" width="100px" height="100px" alt='image'/> */}
            {/* <Container fluid>
              <Row>
              <Col><h1>Memory Land</h1></Col>
              </Row>
            </Container> */}
           
            <h3>Sign In</h3>
           
            <Form>
  <Form.Group controlId="formEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
              {/* <form id="form_id" method="post" name="myform">
              <label>Email:</label><br></br>
              <input type="text" name="username" id="username"/><br></br>
              <label>Password :</label><br></br>
              <input type="password" name="password" id="password"/><br></br>
              <input type="button" value="Login" id="submit" onclick="validate()"/>
              </form> */}
         </div>
        );
};

export default HomePage;

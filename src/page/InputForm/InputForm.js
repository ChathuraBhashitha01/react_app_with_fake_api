import React from 'react'
import Form from 'react-bootstrap/Form';
import NavigationBar from '../../component/NavigationBar/NavigationBar';

export default function InputForm() {
  return (
    <>
    <NavigationBar/>
    <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Form>
  </>
  )
}

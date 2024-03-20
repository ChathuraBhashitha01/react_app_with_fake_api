import React from 'react'
import Form from 'react-bootstrap/Form';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import Button from 'react-bootstrap/Button';
import './style.css'
import { ButtonGroup } from 'react-bootstrap';

export default function InputForm() {
  return (
    <>
    <Form className='frmBody'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Body</Form.Label>
        <Form.Control type="body" placeholder="Enter body" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>UserID</Form.Label>
        <Form.Control type="userID" placeholder="Enter UserID" />
        </Form.Group>

    <ButtonGroup>
    <Button variant="outline-primary">SAVE</Button>{' '}
      <Button variant="outline-success">UPDATE</Button>{' '}
      <Button variant="outline-warning">DELETE</Button>{' '}
      </ButtonGroup>
    </Form>
  </>
  )
}

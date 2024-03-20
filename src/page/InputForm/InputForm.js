import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import Button from 'react-bootstrap/Button';
import './style.css'
import { ButtonGroup } from 'react-bootstrap';

export default function InputForm() {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[userId,setUserId]=useState('')

    function saveData(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err)=>{})
    }
    const updateData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: userId,
            title: title,
            body: body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    const deleteData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId, {
        method: 'DELETE',
        });
    }

  return (
    <>
    <Form className='frmBody'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Body</Form.Label>
        <Form.Control type="body" value={body} onChange={(e)=>{setBody(e.target.value)}} placeholder="Enter body" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>UserID</Form.Label>
        <Form.Control type="userID" value={userId} onChange={(e)=>{setUserId(e.target.value)}} placeholder="Enter UserID" />
        </Form.Group>

    <ButtonGroup className='btnGroup'>
      <Button variant="outline-primary" onClick={saveData}>SAVE</Button>{' '}
      <Button variant="outline-success" onClick={updateData}>UPDATE</Button>{' '}
      <Button variant="outline-warning" onClick={deleteData}>DELETE</Button>{' '}
      </ButtonGroup>
    </Form>
  </>
  )
}

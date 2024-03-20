import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionForm(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
         {props.body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

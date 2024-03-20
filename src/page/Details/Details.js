import React, { useState } from 'react'
import AccordionForm from '../../component/AccordionForm/AccordionForm'

export default function Details() {
    const[data,getData]=useState([])

    const loadData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => getData(json));

    }

  return (
    <div>
        <AccordionForm/>
    </div>
  )
}

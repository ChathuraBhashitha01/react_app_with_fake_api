import React, { useEffect, useState } from 'react'
import AccordionForm from '../../component/AccordionForm/AccordionForm'

export default function Details() {
    const[data,getData]=useState([])

    const loadData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => getData(json));

    }

    useEffect(()=>{
        loadData();
    },[])

  return (
    <div>
        {
            data.map(data=>{
                return(
                   <AccordionForm title={data.title} body={data.body}/>
                )
            })
        }
    </div>
  )
}

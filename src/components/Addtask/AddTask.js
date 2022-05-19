import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
let Name =''
const AddTask = () => {
  
//    const [Name,setName]=useState('')
//    const [Name,setName]=useState('')

   const [user] = useAuthState(auth)
    const handleAddItem=(event)=>{
        event.preventDefault()
        const name =  event.target.name.value
        const email =event.target.email.value
        const description =  event.target.description.value
        const data={name,email,description}
        // console.log(data);
           
        const url = 'http://localhost:5000/tasks';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
 
     


    }
    
    return (
        <div className='container my-5'>
           <div>Name :  <p>{Name}</p></div>
          
  
 <Form onSubmit={handleAddItem}>
     
 <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" disabled value={user?.email}  className='border border-success rounded-pill' name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Name" className='border border-success rounded-pill' name='name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <textarea className='border text-center form-control border-success rounded-pill'  placeholder="Task Description" name='description' ></textarea>
            </Form.Group>
           
            <button type="submit"  class="btn  btn-outline-warning btn-success fw-bold">Success</button>
        </Form>
        
      
</div>
    );
};

export default AddTask;
import React, { useState } from 'react';
import CustomLink from '../shared/CustomLink';

const Task = ({task}) => {
    const [decoration,setDecoration] = useState(false)
    const [tasks,setTasks]=useState([])
    fetch('http://localhost:5000/tasks')
    .then(res=>res.json())
    .then(data=>setTasks(data))
    const sendMyItemDelete=(id)=>{
        const procceed = window.confirm('Are you sure to delete this item???');
    if (procceed) {
        console.log(id);
      const url = `http://localhost:5000/tasks/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = tasks.filter((item) => item._id !== id);
            setTasks(remaining);
          }
        });
    } else {
      console.log('ok');
    }



    }
    const Change=()=>{
        setDecoration(true)
    }

    return (
        <div class="col">
        <div class="card h-100  shadow-lg  border border-success">
            <div class="card-body">
              <h4 class="card-title fw-bolder">{task.name}</h4>
              <p class={`card-text ${decoration?'text-decoration-line-through':''}`}>{task.description}</p>
           
            
            </div>
            <div className='card-footer bg-dark d-flex justify-content-between'>
             <button type="button" onClick={Change} class="btn btn-dark btn-outline-warning">Complete</button>
            <button
          onClick={() => sendMyItemDelete(task._id)}
          type="button"
          class="btn btn-danger"
        >
          Remove
        </button>
            </div>
          </div>
         
        </div>
    );
};

export default Task;
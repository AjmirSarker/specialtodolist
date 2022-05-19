import React, { useEffect, useState } from 'react';

import Task from './Task';
const Alltasks = () => {
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
    .then(res=>res.json())
    .then(data=>setTasks(data))
    },[tasks])
    return (
      <div className="container">
            <div class="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
 {
    tasks.map(task=><Task task={task}></Task>)
 }
</div>
      </div>
    );
};

export default Alltasks;
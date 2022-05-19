import React, { useEffect, useState } from 'react';
import { Accordion, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
// import auth from '../../../Firebase/Firebase.init';
// import useData from '../../../Hooks/useData';

const Tasks = () => {
    const[users]=useAuthState(auth)
    const [tasks,setTasks]=useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/tasks')
    .then(res=>res.json())
    .then(data=>setTasks(data))
   },[tasks])
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
    const [user] = useAuthState(auth);
    const [getUser,setGetUser] = useState([]);
    useEffect(()=>{
    if(user){
    fetch(`http://localhost:5000/taskss?email=${user.email}`)
    .then(res => res.json())
    .then(data => setGetUser(data))
    }
    }
    ,[user])
    return (
        <div>
            <h1>User: {user?.email}</h1>
            <Table className='container' >
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getUser?.map((detail,index) =>
                            <tr>
                                <td>{detail.name}  </td>
                                <td>{detail.description}</td>
                                  
                                <td>  <button
          onClick={() => sendMyItemDelete(detail._id)}
          type="button"
          class="btn btn-danger"
        >
          Remove
        </button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Tasks;
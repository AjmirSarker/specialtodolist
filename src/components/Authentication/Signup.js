import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../shared/Loading';
import { async } from '@firebase/util';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate()
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        Euser,
        Eloading,
        Eerror,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});
      if(loading || Eloading){
        return  <Loading></Loading>
      }
   
  if(error|| Eerror){
     
      toast.error(`${error?.message || Eerror?.message}`,{id:'error'})
  
  }
    const handlesignup= async(e)=>{
        e.preventDefault()

        const email = e.target.email.value
        const password= e.target.password.value
        const confirmpassword = e.target.confirmpassword.value
       
       
        if(password === confirmpassword){
           
           await createUserWithEmailAndPassword(email, password)
          
        }else{
           toast.error(`Password and Confirm password didn't match please try again`)
        }    

    }
    if(user || Euser){
        navigate('/')
        toast.success(`Signup Success`,{id:'success'})
        toast.success(`Verify email sent`,{id:'verify'})
    }
    return (
        <div className='container my-5'>
        <Form onSubmit={handlesignup}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" className='border border-success rounded-pill' name='email' />
                   </Form.Group>
       
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                       <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='border border-success rounded-pill' name='password'/>
            </Form.Group>
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                      <Form.Group className="mb-3 " controlId="formBasicPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control type="password" placeholder="Confirm Password" className='border border-success rounded-pill' name='confirmpassword'/>
           </Form.Group>
                  </Form.Group>
                  <p className="mt-3">
                Already have an account ?
                <Link className="ms-2 text-success fw-bolder" to="/login">
                  Login
                </Link>
              </p>
                 
                  
                   <button type="submit" class="btn  btn-outline-warning btn-success fw-bold">SignUp</button>

               </Form>
               <GoogleButton
              className="w-50  my-5 mx-auto rounded-3 bg-dark"
              onClick={() => signInWithGoogle()}
            />
       </div>
    );
};

export default Signup;
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useSignInWithGoogle,useSignInWithEmailAndPassword, useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef =useRef()
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, Guser, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        Euser,
        Eloading,
        Eerror,
      ] = useSignInWithEmailAndPassword(auth);
      if (user) {
      toast.success('Login Successful')
        navigate('/');

      }
    if(loading|| Eloading){
        return <Loading></Loading>
    }
    if (Guser|| Euser) {
        navigate(from, { replace: true });
    }
    if(error|| Eerror){
        toast.error(`${error?.message || Eerror?.message}`,{id:'error'})
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Email sent successful')
        }
        else {
            alert('Please enter your email!')
        }
    }
   
  
    const handlelogin=async(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
      

    }

    return (
        <div className='container my-5'>
        <Form onSubmit={handlelogin}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email</Form.Label>
                       <Form.Control ref={emailRef} type="email" placeholder="Enter email" className='border border-success rounded-pill' name='email' />
                   </Form.Group>
                   
       
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                       <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='border border-success rounded-pill' name='password'/>
            </Form.Group>
                   </Form.Group>
                   <p className="mt-3">
                New here please
                <Link className="ms-2 text-danger" to="/signup">
                  Sign Up
                </Link>
              </p>
                  
                   <button type="submit" class="btn  btn-outline-warning btn-success fw-bold">Login</button>
               </Form>
               <div className='d-flex '>
                   <button onClick={resetPassword} className='p-text mb-3 p-1 rounded bt btn-info me-auto'>Reset password?</button>
                   </div>
               <GoogleButton
              className="w-50  my-5 mx-auto rounded-3 bg-dark"
              onClick={() => signInWithGoogle()}
            />
       </div>
    );
};

export default Login;

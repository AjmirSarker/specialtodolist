import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

import Loading from '../shared/Loading';



const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const location = useLocation();
    if(!user){
        return<Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    if(loading){
      return  <Loading></Loading>
    }
    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5 verify-email'>
            <div className='text-center mb-2'>
                <h3 className='text-warning fs-4 fw-bolder '>Verified  OR  Not!?</h3>
                <h4 className='text-success  fs-4 fw-bolder'>Your verify mail is send</h4>
                <h4 className=' text-success fs-4 fw-bolder'>refresh your page after verified</h4>
            </div>
<h1 className='text-danger fw-folder'>If verify mail not sent..</h1>
            <button
                className='btn btn-success btn-outline-info my-3'
                onClick={async () => {
                    await sendEmailVerification();
                   
                }}
            >
                Send Verification Email Again
            </button>
            
        </div>
    }
    return children;
};

export default RequireAuth;
import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBInput, MDBCardFooter, MDBValidation, MDBBtn, MDBIcon, MDBSpinner } from 'mdb-react-ui-kit';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { login } from '../redux/features/authSlice';

import { reset } from '../redux/features/authSlice';

import GoogleLogin from 'react-google-login';




const Login = () => {

    const initialState = {
        email: "",
        password: ""
    }

    const { loading, error } = useSelector((state) => ({ ...state.auth }))

    const dispatch = useDispatch();

    const navigate = useNavigate()


    const [formValue, setFormValue] = useState(initialState);

    const { email, password } = formValue




    useEffect(() => {

        error && toast.error(error);

        return () => {
            dispatch(reset())
        }

    }, [error])





    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ formValue, navigate, toast }))
        }

    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }



    const googleSuccess = (res) => {
        console.log(res);
    };

    const googleFailure = (error) => {
        console.log(error);
        toast.error(error)
    }







    return (
        <div style={{ margin: 'auto', padding: '15px', maxWidth: '450px', alignContent: 'center', marginTop: '120px' }}>

            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x' />
                <h5>Sign in</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                        <div className="col-md-12">
                            <MDBInput
                                label="Email"
                                name="email"
                                type="email"
                                value={email}

                                onChange={handleInput}
                                required
                                invalid
                                validation="Please Provide Your Email!"
                            />
                        </div>



                        <div className="col-md-12">
                            <MDBInput
                                label="Password"
                                name="password"
                                type="password"
                                value={password}

                                onChange={handleInput}
                                required
                                invalid
                                validation="Please Provide Your Password!"
                            />
                        </div>
                        <div className="col-12">
                            <MDBBtn style={{ width: '100%' }} className='mt-2' type='submit'>
                                {loading && <MDBSpinner size='sm' role='status' tag='span' className='me-2' />}
                                Login
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                    <br />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        render={(renderProps) => (
                            <MDBBtn style={{ width: '100%' }} color='danger' onClick={(renderProps.onClick)} disabled={renderProps.disabled}>
                                <MDBIcon className='me-2' fab icon='google' />
                                Google Sign In
                            </MDBBtn>
                        )}

                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}

                    />
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to='/register' draggable='false'>
                        <p>Don't have an account? Sign up</p>
                    </Link>
                </MDBCardFooter>
            </MDBCard>


        </div>
    )
}

export default Login
import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBInput, MDBCardFooter, MDBValidation, MDBBtn, MDBIcon, MDBSpinner } from 'mdb-react-ui-kit';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { login } from '../redux/features/authSlice';





const Register = () => {

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const { loading, error } = useSelector((state) => ({ ...state.auth }))

    const dispatch = useDispatch();

    const navigate = useNavigate()


    const [formValue, setFormValue] = useState(initialState);

    const { firstName, lastName, email, password, confirmPassword } = formValue




    useEffect(() => {

        error && toast.error(error);

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


    return (
        <div style={{ margin: 'auto', padding: '15px', maxWidth: '450px', alignContent: 'center', marginTop: '120px' }}>

            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x' />
                <h5>Sign Up</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>


                        <div className="col-md-6">
                            <MDBInput
                                label="firstName"
                                name="firstName"
                                type="text"
                                value={firstName}

                                onChange={handleInput}
                                required
                                invalid
                                validation="Provide Your firstName!"
                            />
                        </div>



                        <div className="col-md-6">
                            <MDBInput
                                label="lastName"
                                name="lastName"
                                type="text"
                                value={lastName}

                                onChange={handleInput}
                                required
                                invalid
                                validation="Provide Your lastName!"
                            />
                        </div>



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


                        <div className="col-md-12">
                            <MDBInput
                                label="confirm Password"
                                name="confirmpassword"
                                type="password"
                                value={confirmPassword}

                                onChange={handleInput}
                                required
                                invalid
                                validation="Please Confirm Your Password!"
                            />
                        </div>





                        <div className="col-12">
                            <MDBBtn style={{ width: '100%' }} className='mt-2' type='submit'>
                                {loading && <MDBSpinner size='sm' role='status' tag='span' className='me-2' />}
                                Register
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to='/login' draggable='false'>
                        <p>Already have an account? Sign In</p>
                    </Link>
                </MDBCardFooter>
            </MDBCard>


        </div>
    )
}

export default Register
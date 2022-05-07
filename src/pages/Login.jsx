import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBInput, MDBCardFooter, MDBValidation, MDBBtn, MDBIcon, MDBSpinner } from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';



const initialState = {
    email: "",
    password: ""
}


const Login = () => {

    const [formValue, setFormValue] = useState(initialState);

    const { email, password } = formValue


    const handleSubmit = () => { }




    return (
        <div style={{ margin: 'auto', padding: '15px', maxWidth: '450px', alignContent: 'center', marginTop: '120px' }}>

            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x' />
                <h5>Sign in</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>

                    </MDBValidation>
                </MDBCardBody>
            </MDBCard>


        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa"
import { Link, Redirect } from 'react-router-dom'
import { connect, useSelector} from 'react-redux'
import {logIn} from '../actions/AuthAction'
import './login.css'


const mapDispatchToProps = (dispatch) => {
    return{
        logIn: (x) => dispatch(logIn(x))
    }
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}
const LogIn = ({logIn, uid}) => {

    const error = useSelector(state => state.auth.authErr)

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        logIn(input)
    }

    
    return uid ? <Redirect to = '/' /> : (
        <div className = "form-container">
            <Form className =  "bod-form" onSubmit = {submitHandler}>
                <h3>{error && error}</h3>
                <FaTwitter color = "#1ca0f2" fontSize = "3rem"/>
                <div className = "head-text">Log In to twitter</div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className = "font-weight-bold">Email address</Form.Label>
                    <Form.Control onChange = {changeHandler} id = "email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className = "font-weight-bold">Password</Form.Label>
                    <Form.Control onChange = {changeHandler} id = "password" type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button><br/>

                <Link to = '/auth' className = "small-wrapper"><small className = "small-text">Sign Up for twitter</small></Link>
            </Form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

import React, { useState } from 'react'
import './auth.css'
import { FaTwitter } from "react-icons/fa"
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { signIn } from '../actions/AuthAction';

const  mapDispatchToprops = (dispatch) => {
    return {
        signUp: (x) => dispatch(signIn(x))
    }
}

const Auth = ({signUp}) => {

    const uid = useSelector(state => state.firebase.auth.uid)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        signUp(input)
    }

      return uid ? <Redirect to  ='/' /> : (
        <div className = "container-fluid">
            <div className = "row d-flex">
                <div id = "div1" className = "d-flex align-items-center justify-content-center col-lg-6 col-md-5 picsdiv">
                <div id = "icon1">
                    <FaTwitter color = "white" fontSize = "30rem"/>
                </div>
                </div>
                <div className = "col-lg-6 col-md-7 picsdiv">
                    <div className = "container pt-4" id = "div2">
                        <div className = "icon">
                        <FaTwitter color = "#1ca0f2" fontSize = "3rem"/>
                        </div>
                        <h2 className = "mt-4" id = "happening">Happening Now</h2>
                        <h4 id = "join">Join Twitter Today</h4>
                        <div className = "buttons">
                            <button id = "sign" className = "butt" onClick={handleShow}>
                                    Sign Up
                            </button>
                            <button id = "log" className = "butt">
                                <Link to = '/login'><div id = "login">Log In</div></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Create your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit = {submitHandler}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Name" id = 'name' onChange = {changeHandler}/>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" id = 'email' onChange = {changeHandler}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id = 'password' onChange = {changeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default connect(null, mapDispatchToprops)(Auth)

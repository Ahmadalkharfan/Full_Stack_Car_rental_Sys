import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
//import { useHistory } from "react-router-dom";



const AddUser = ({history}) => {

    const [username, setUsername] = useState('')
    //const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState('')
    const [pass, setPass] = useState('')
    const [mobileNumber, setMobileNumber] = useState()

    //const history = useHistory();
    
    const addUserHandler = async () => {
        const data = {
            username: username,
            //email: email,
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            gender: gender,
            pass: pass,
            role: true,
            mobileNumber: mobileNumber
        }

        await axios.post('api/users/addUser', data)

        history.push("/users");
    }



    return (
        <>
            <Container>
                <h1>Add User</h1>
                <hr />

                <Form onSubmit={addUserHandler} action="/users">
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>firstName</Form.Label>
                        <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter firstName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>lastName</Form.Label>
                        <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter lastName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="birthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="Enter birthday" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Choose your Gender" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobileNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="number" placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        </>

    )
}

export default AddUser
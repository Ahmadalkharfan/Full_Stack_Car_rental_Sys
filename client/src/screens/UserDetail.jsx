import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Form, Button, Row, Col, Table } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';


const UserDetail = () => {

    const { id } = useParams()
    const [username, setUsername] = useState('')
    //const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState('')
    const [pass, setPass] = useState('')
    const [mobileNumber, setMobileNumber] = useState()

    useEffect(() => {
        //get user
        const getUserData = async () => {
            const { data } = await axios.get(`/api/users/getUser/${id}`)
            console.log(data)
            setUsername(data.username)
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setBirthday(data.birthday)
            setGender(data.gender)
            setPass(data.pass)
            setMobileNumber(data.mobileNumber)

        }
        getUserData()
    }, [id])

    const [cars, setUserCars] = useState([])

    //fetch the owner's cars.
    useEffect(() => {
        const getUserCarsData = async () => {
            const { data } = await axios.get(`/api/users/getUserCars/${id}`)
            console.log(data)
            setUserCars(data)
        }
        getUserCarsData()
    }, [id])




    //delete User

    const handleDelete = async (id) => {
        await axios.delete(`/api/users/deleteUser/${id}`)

    }

    return (
        <>
            <Container>
                <h1>User Info</h1>
                <hr />

                <Form action="/users">
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>firstName</Form.Label>
                        <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter firstName" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>lastName</Form.Label>
                        <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter lastName" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="birthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="Enter birthday" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Choose your Gender" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobileNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="number" placeholder="Enter Mobile Number" readOnly />
                    </Form.Group>
                    <Link to={`/user/edit/${id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <Link to={`/users`}>
                        <Button onClick={() => handleDelete(id)}>Delete</Button>
                    </Link>
                </Form>


            </Container >
            <Container className='justify-content-center mt-2 mb-2 p-2'>
                <h1 className='text-center'>Owned Cars</h1>
                <hr />
                <Row>
                    <Col className='col-12' >

                        <Table striped responsive bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Car Brand</th>
                                    <th>Number of Doors</th>
                                    <th>Model Year</th>
                                    <th>Color</th>
                                    <th>Model Name</th>
                                    <th>Gear</th>
                                    <th>Plate Number</th>
                                    <th>Owner's Username</th>
                                    <th>Car Location - latitudes</th>
                                    <th>Car Location - longitude</th>
                                    <th>Day Price</th>
                                    <th>Featured?</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
 
                        </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default UserDetail
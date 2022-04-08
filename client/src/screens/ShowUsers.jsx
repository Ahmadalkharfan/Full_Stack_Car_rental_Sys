import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserTable from '../components/UserTable';

const ShowUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsersData = async () => {
            const { data } = await axios.get('/api/users/allUsers')
            console.log(data)
            setUsers(data)
        }
        getUsersData()
    }, [])
    return (
        <>
            <Container className='justify-content-center mt-2 mb-2 p-2'>
                <h1 className='text-center'>Show All Users</h1>
                <hr />
                <Row>
                    <Col className='col-12' >
                        <Row>
                            <Link to={`/addUser`}>
                                <Button >Create User</Button>
                            </Link>
                        </Row>
                        <Row>
                            <Table striped responsive bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Birthday</th>
                                        <th>Gender</th>
                                        <th>Role</th>
                                        <th>Mobile Number</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                { //send the users to the table body.
                                    users.map(user => {
                                        return <UserTable key={user.id} user={user} />

                                    })
                                }
                            </Table>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ShowUsers
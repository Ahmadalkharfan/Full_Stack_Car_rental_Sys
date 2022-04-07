import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from '../components/UserCard';

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
            <Container>
                <h1 className='text-center'>Show All Users</h1>
                <hr />
                <Row>
                    {
                        users.map(user => {
                            return <Col md={8} lg={12} sm={12} key={user.id}>
                                <UserCard user={user} />
                            </Col>
                        })
                    }

                </Row>

            </Container>
        </>
    )
}

export default ShowUsers
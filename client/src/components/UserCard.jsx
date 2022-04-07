import React from 'react'
import {Card, } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        {user.firstName}
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}

export default UserCard
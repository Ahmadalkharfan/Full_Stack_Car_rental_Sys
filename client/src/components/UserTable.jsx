import React from 'react'
import { Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserTable = ({ user }) => {
    return (
        <>
                <tbody >
                    <tr >
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.birthday}</td>
                        <td>{user.gender}</td>
                        <td>{user.role}</td>
                        <td>{user.mobileNumber}</td>

                    </tr>
                </tbody>

        </>
    )
}

export default UserTable
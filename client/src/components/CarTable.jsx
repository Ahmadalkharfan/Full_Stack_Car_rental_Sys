import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const CarTable = ({ car }) => {
    const [user, setUser] = useState([])

    //fetch the owner of the car.
    useEffect(() => {
        const getUserData = async () => {
            const { data } = await axios.get(`api/users/getUser/${car.user_id}`)
            console.log(data)
            setUser(data)
        }
        getUserData()
    }, [])
    return (
        <>
            <tbody >
                <tr >
                    <td>{car.id}</td>
                    <td>{car.brand}</td>
                    <td>{car.door_num}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.model_name}</td>
                    <td>{car.mode}</td>
                    <td>{car.plate_number}</td>
                    <td>{user.username}</td>
                    <td>{car.location_latitudes}</td>
                    <td>{car.location_longitude}</td>
                    <td>{car.day_price}</td>
                    <td>{car.is_featured + ''}</td>
                    <td>
                        <Link to={`/car/${car.id}`}>
                            <Button>View</Button>
                        </Link> 
                    </td>

                </tr>
            </tbody>

        </>
    )
}

export default CarTable
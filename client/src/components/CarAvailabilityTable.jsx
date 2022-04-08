import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CarAvailabilityTable = ({ carAvailability }) => {
    const [car, setCar] = useState([])
    const [user, setUser] = useState([])
    //fetch the car.
    useEffect(() => {
        const getCarData = async () => {
            const { data } = await axios.get(`api/cars/getCar/${carAvailability.car_id}`)
            console.log(data)
            setCar(data)
        } 
        getCarData()
    }, [])


    //fetch the owner of the car.
    useEffect(() => {
        const getUserData = async () => {
            const { data } = await axios.get(`api/users/getUser/${car.user_id}`)
            console.log(data)
            setUser(data)
        }
        getUserData()
    }, [car.user_id])

    return (
        <>
            <tbody >
                <tr >
                    <td>{carAvailability.id}</td>
                    <td>{car.brand} {car.model_name} {car.year}</td>
                    <td>{user.username}</td>
                    <td>{carAvailability.start_at}</td>
                    <td>{carAvailability.end_at}</td>
                  
                </tr>
            </tbody>

        </>
    )
}

export default CarAvailabilityTable
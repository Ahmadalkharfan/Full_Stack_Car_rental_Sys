import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const EditCar = () => {

    const { id } = useParams()

    const [brand, setBrand] = useState('')
    const [door_num, setDoor_num] = useState()
    const [year, setYear] = useState('')
    const [color, setColor] = useState()
    const [model_name, setModel_name] = useState('')
    const [mode, setMode] = useState('')
    const [plate_number, setPlate_number] = useState('')
    const [user_id, setUser_id] = useState()
    const [location_latitudes, setLocation_latitudes] = useState()
    const [location_longitude, setLocation_longitude] = useState()
    const [day_price, setDay_price] = useState()

    useEffect(() => {
        //get car
        const getCarData = async () => {
            const { data } = await axios.get(`/api/cars/getCar/${id}`)
            console.log(data)
            setBrand(data.brand)
            setDoor_num(data.door_num)
            setYear(data.year)
            setColor(data.color)
            setModel_name(data.model_name)
            setMode(data.mode)
            setPlate_number(data.plate_number)
            setUser_id(data.user_id)
            setLocation_latitudes(data.location_latitudes)
            setLocation_longitude(data.location_longitude)
            setDay_price(data.day_price)

        }
        getCarData()
    }, [id])


    //update func
    const editCarHandler = async () => {
        const data = {
            brand: brand,
            door_num: door_num,
            year: year,
            color: color,
            model_name: model_name,
            mode: mode,
            plate_number: plate_number,
            user_id: user_id,
            location_latitudes: location_latitudes,
            location_longitude: location_longitude,
            day_price: day_price,
            is_featured: false
        }

        await axios.put(`/api/cars/updateCar/${id}`, data)


    }


    return (
        <>
            <Container>
                <h1>Edit Car</h1>
                <hr />

                <Form onSubmit={editCarHandler} action="/cars">
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>brand</Form.Label>
                        <Form.Control value={brand} onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Enter brand"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="door_num">
                        <Form.Label>number of doors</Form.Label>
                        <Form.Control value={door_num} onChange={(e) => setDoor_num(e.target.value)} type="number" placeholder="Enter door_num"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                        <Form.Label>year</Form.Label>
                        <Form.Control value={year} onChange={(e) => setYear(e.target.value)} type="text" placeholder="Enter year"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="color">
                        <Form.Label>color</Form.Label>
                        <Form.Control value={color} onChange={(e) => setColor(e.target.value)} type="text" placeholder="Enter color"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="model_name">
                        <Form.Label>model_name</Form.Label>
                        <Form.Control value={model_name} onChange={(e) => setModel_name(e.target.value)} type="text" placeholder="model_name"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mode">
                        <Form.Label>mode</Form.Label>
                        <Form.Control value={mode} onChange={(e) => setMode(e.target.value)} type="text" placeholder="mode"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="plate_number">
                        <Form.Label>plate_number</Form.Label>
                        <Form.Control value={plate_number} onChange={(e) => setPlate_number(e.target.value)} type="text" placeholder="Enter plate_number"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user_id">
                        <Form.Label>user_id</Form.Label>
                        <Form.Control value={user_id} onChange={(e) => setUser_id(e.target.value)} type="number" placeholder="Enter user_id"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location_latitudes">
                        <Form.Label>location_latitudes</Form.Label>
                        <Form.Control value={location_latitudes} onChange={(e) => setLocation_latitudes(e.target.value)} type="number" placeholder="Enter location_latitudes"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location_longitude">
                        <Form.Label>location_longitude</Form.Label>
                        <Form.Control value={location_longitude} onChange={(e) => setLocation_longitude(e.target.value)} type="number" placeholder="Enter location_longitude"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="day_price">
                        <Form.Label>day_price</Form.Label>
                        <Form.Control value={day_price} onChange={(e) => setDay_price(e.target.value)} type="number" placeholder="Enter day_price"  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </Form>


            </Container >
        </>
    )
}

export default EditCar
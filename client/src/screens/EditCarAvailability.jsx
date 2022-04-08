import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import {  useParams } from 'react-router-dom';

const EditCarAvailability = () => {

    const { id } = useParams()

    const [car_id, setCar_id] = useState()
    const [start_at, setStart_at] = useState()
    const [end_at, setEnd_at] = useState()


    useEffect(() => {
        //get car Availability
        const getCarAvailabilityData = async () => {
            const { data } = await axios.get(`/api/carAvailability/getCarAvailability/${id}`)
            console.log(data)
            setCar_id(data.car_id)
            setStart_at(data.start_at)
            setEnd_at(data.end_at)

        }
        getCarAvailabilityData()
    }, [id])


    //update func
    const editCarAvailabilityHandler = async () => {
        const data = {
            car_id:car_id,
            start_at:start_at,
            end_at:end_at
        }

        await axios.put(`/api/carAvailability/updateCarAvailability/${id}`, data)


    }


    return (
        <>
            <Container>
                <h1>Edit Car Availability</h1>
                <hr />

                <Form onSubmit={editCarAvailabilityHandler} action="/carsAvailability">
                    <Form.Group className="mb-3" controlId="car_id">
                        <Form.Label>car id</Form.Label>
                        <Form.Control value={car_id} onChange={(e) => setCar_id(e.target.value)} type="number" placeholder="Enter car_id"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Start At">
                        <Form.Label>Start At</Form.Label>
                        <Form.Control value={start_at} onChange={(e) => setStart_at(e.target.value)} type="date" placeholder="Enter start at"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="End At">
                        <Form.Label>End At</Form.Label>
                        <Form.Control value={end_at} onChange={(e) => setEnd_at(e.target.value)} type="date" placeholder="Enter end at"  />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </Form>


            </Container >
        </>
    )
}

export default EditCarAvailability
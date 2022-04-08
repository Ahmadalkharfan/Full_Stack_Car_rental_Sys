import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';

const CarAvailabilityDetail = () => {

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



    //delete Car Availability

    const handleDelete = async (id) => {
        await axios.delete(`/api/carAvailability/deleteCarAvailability/${id}`)

    }

    return (
        <>
            <Container>
                <h1>Car Availability Info</h1>
                <hr />

                <Form action="/carsAvailability">
                <Form.Group className="mb-3" controlId="car_id">
                        <Form.Label>car id</Form.Label>
                        <Form.Control value={car_id} onChange={(e) => setCar_id(e.target.value)} type="number" placeholder="Enter car_id" readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Start At">
                        <Form.Label>Start At</Form.Label>
                        <Form.Control value={start_at} onChange={(e) => setStart_at(e.target.value)} type="date" placeholder="Enter start at" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="End At">
                        <Form.Label>End At</Form.Label>
                        <Form.Control value={end_at} onChange={(e) => setEnd_at(e.target.value)} type="date" placeholder="Enter end at" readOnly />
                    </Form.Group>
                    <Link to={`/carAvailability/edit/${id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <Link to={`/carsAvailability`}>
                        <Button onClick={() => handleDelete(id)}>Delete</Button>
                    </Link>
                </Form>


            </Container >
        </>
    )
}

export default CarAvailabilityDetail
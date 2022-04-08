import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddCarAvailability = () => {

    const [car_id, setCar_id] = useState()
    const [start_at, setStart_at] = useState()
    const [end_at, setEnd_at] = useState()




    const addCarAvailabilityHandler = async () => {
        const data = {
            car_id: car_id,
            start_at: start_at,
            end_at: end_at
        }

        await axios.post('api/carAvailability/addCarAvailability', data)


    }



    return (
        <>
            <Container>
                <h1>Add Car Availability</h1>
                <hr />

                <Form onSubmit={addCarAvailabilityHandler} action="/carsAvailability">
                    <Form.Group className="mb-3" controlId="car_id">
                        <Form.Label>car_id</Form.Label>
                        <Form.Control value={car_id} onChange={(e) => setCar_id(e.target.value)} type="number" placeholder="Enter car_id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="start_at">
                        <Form.Label>start_at</Form.Label>
                        <Form.Control value={start_at} onChange={(e) => setStart_at(e.target.value)} type="date" placeholder="Enter start_at" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="end_at">
                        <Form.Label>end_at</Form.Label>
                        <Form.Control value={end_at} onChange={(e) => setEnd_at(e.target.value)} type="date" placeholder="Enter end_at" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        </>

    )
}

export default AddCarAvailability
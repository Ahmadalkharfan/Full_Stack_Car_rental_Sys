import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import CarAvailabilityTable from '../components/CarAvailabilityTable';

const ShowCarsAvailability = () => {

    const [carsAvailability, setCarsAvailability] = useState([])

    useEffect(() => {
        const getCarsAvailabilityData = async () => {
            const { data } = await axios.get('/api/carAvailability/allCarAvailability')
            console.log(data)
            setCarsAvailability(data)
        }
        getCarsAvailabilityData()
    }, [])
    return (
        <>
            <Container className='justify-content-center mt-2 mb-2 p-2'>
                <h1 className='text-center'>Show All Cars Availbility</h1>
                <hr />
                <Row>
                    <Col className='col-12' >

                        <Table striped responsive bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Car Name</th>
                                    <th>Owner's Username</th>
                                    <th>Available On</th>
                                    <th>Available Until</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            { //send the Car Availability to the table body.
                                carsAvailability.map(carAvailability => {
                                    return <CarAvailabilityTable key={carAvailability.id} carAvailability={carAvailability} />

                                })
                            }
                        </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ShowCarsAvailability
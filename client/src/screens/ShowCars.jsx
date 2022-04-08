import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import CarTable from '../components/CarTable';

const ShowCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCarsData = async () => {
            const { data } = await axios.get('/api/cars/allCars')
            console.log(data)
            setCars(data)
        }
        getCarsData()
    }, [])
    return (
        <>
            <Container className='justify-content-center mt-2 mb-2 p-2'>
                <h1 className='text-center'>Show All Cars</h1>
                <hr />
                <Row>
                    <Col className='col-12' >

                        <Table striped responsive bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Car Brand</th>
                                    <th>Number of Doors</th>
                                    <th>Model Year</th>
                                    <th>Color</th>
                                    <th>Model Name</th>
                                    <th>Gear</th>
                                    <th>Plate Number</th>
                                    <th>Owner's Username</th>
                                    <th>Car Location - latitudes</th>
                                    <th>Car Location - longitude</th>
                                    <th>Day Price</th>
                                    <th>Featured?</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            { //send the Cars to the table body.
                                cars.map(car => {
                                    return <CarTable key={car.id} car={car} />

                                })
                            }
                        </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ShowCars
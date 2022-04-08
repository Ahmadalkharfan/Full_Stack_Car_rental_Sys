import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/users">SOCAR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/cars">Cars</Nav.Link>
                        <Nav.Link href="/carsAvailability">Cars Availability</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default AppNavbar;
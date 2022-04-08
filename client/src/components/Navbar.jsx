import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar;
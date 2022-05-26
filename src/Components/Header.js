import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Img from "./logo.png";

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img
                        width="80px"
                        height="80px"
                        src={Img}
                        border="10px"
                        alt="Logo"
                    />
                    <Navbar.Brand href="/">Paulo Cezar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Testes"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="/imc">IMC</NavDropdown.Item>
                            <NavDropdown.Item href="/tdee">
                                TMB
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

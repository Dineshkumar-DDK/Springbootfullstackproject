import React from 'react'
import img1 from "../assets/images/Img1.jpg"
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigationbar() {
  return (
    <div>
        <Navbar expand="sm"  bg="dark" className="bg-body-tertiary p-2 navigstyle " data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                <img
                src={img1}
                width="30"
                height="30"
                className="d-inline-block align-top rounded-pill"
                alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  as={Link} to='/'><span>Home</span></Nav.Link>
                                <Nav.Link as={Link} to='/Add'><span>Add</span></Nav.Link>
                                <Nav.Link as ={Link} to='/About'><span>AboutAuthor</span></Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                                </NavDropdown>  uncomment and use if wanted */}
                            </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Navigationbar
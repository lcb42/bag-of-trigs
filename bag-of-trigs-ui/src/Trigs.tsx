import './Trigs.css';

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

export default function Trigs() {
    return (
        <div className='page-wrap'>
            <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Bag of Trigs</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='d-flex justify-content-center trig-tile-container'>
                <div className="trig-tile">
                    <Card border="dark" bg="transparent" style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Trig Title</Card.Title>
                            <Card.Text>
                                <div>
                                    <p>Fact 1 about trig</p>
                                    <p>Fact 2 about trig</p>
                                    <p>Fact 3 about trig</p>
                                    <p>etc...</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="trig-tile">
                    <Card border="dark" bg="transparent" style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Trig Title 2</Card.Title>
                            <Card.Text>
                                <div>
                                    <p>Fact 1 about trig</p>
                                    <p>Fact 2 about trig</p>
                                    <p>Fact 3 about trig</p>
                                    <p>etc...</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="trig-tile">
                    <Card border="dark" bg="transparent" style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Trig Title 3</Card.Title>
                            <Card.Text>
                                <div>
                                    <p>Fact 1 about trig</p>
                                    <p>Fact 2 about trig</p>
                                    <p>Fact 3 about trig</p>
                                    <p>etc...</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Navbar bg="transparent" expand="lg" fixed="bottom"><p className='footer-content'>lucyblatherwick - 2022</p></Navbar>
        </div>
    );
}

// A: Build example cards //Done//
// B: Pipe data from file into backend
// C: Pipe data from backend into frontend
// D: Map?
// E: Filters?
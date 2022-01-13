import './Trigs.css';

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Trigs() {
    return (
        <div className='page-wrap'>
            <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Bag of Trigs</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='d-flex flex-column justify-contents-center home-content-container'>
                <div className="home-content">
                    <h1>Now to populate this page with lots of trig fact tiles</h1>
                </div>
            </div>
            <Navbar bg="transparent" expand="lg" fixed="bottom"><p className='footer-content'>lucyblatherwick - 2022</p></Navbar>
        </div>
    );
}
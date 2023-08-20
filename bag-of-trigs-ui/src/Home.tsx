import './Home.css';

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Home() {
    return (
        <div className='page-wrap'>
            <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="/">Bag of Trigs</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='d-flex flex-column justify-contents-center home-content-container'>
                <div className="home-content">
                    <h1>Welcome to Bag of Trigs!</h1>
                    <h2>The best place to find your next trig point adventure.</h2>
                    <br/>
                    <a href="/trigs" className='btn btn-outline-dark'>Find a trig point!</a>
                </div>
            </div>
            <Navbar bg="transparent" expand="lg" fixed="bottom"><p className='footer-content'>lucyblatherwick - 2022</p></Navbar>
        </div>
    );
}
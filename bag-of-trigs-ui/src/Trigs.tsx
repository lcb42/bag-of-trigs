import { useEffect, useState } from 'react';
import './Trigs.css';
import axios from 'axios';

import NavBar from './components/NavBar';
import Navbar from "react-bootstrap/Navbar";

import TrigTile from "./components/TrigTile";

export default function Trigs() {
    //const [data, setData] = useState({trigs: []});

    useEffect(() => {
        const getTrigs = async () => {
            const result = await axios('/trigreq');
            console.log(result);
        };
        getTrigs();
    }, []);

    return (
        <div className='page-wrap'>
            <NavBar/>
            <div className='d-flex justify-content-center trig-tile-container'>
                <TrigTile title="Trig Title 1" trigFacts={[]} trigImgPath="/images/trigPic1.jpg"/>
                <TrigTile title="Trig Title 2" trigFacts={[]}/>
                <TrigTile title="Trig Title 3" trigFacts={[]}/>
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
import { useEffect, useState } from 'react';
import './Trigs.css';
import axios from 'axios';

import TrigTile from "./components/TrigTile";
import { Trig } from "./types/Trig";

export default function Trigs() {
  const [trigData, setTrigData] = useState({numOfPages: 1, pageNum: 0, pageData: []});

  useEffect(() => {
    console.log('Trying to get trigs');
    const getTrigs = async () => {
      const result = await axios('/trigs');
      console.warn(result.data);
      setTrigData(result.data);
    };
    getTrigs();
  }, []);

  return (
    <div className='d-flex justify-content-center trig-tile-container'>
      {trigData.pageData.map((trig: Trig) => {
        return (
          <TrigTile
            title={trig.trig_name}
            trigFacts={[]}
            trigImgPath="/images/trigPic1.jpg"
          />
        )
      })}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './AllSubmission.css'

const AllSubmission = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('https://gub-server-practice-sniu.vercel.app/information').then(res => res.json()).then(data => setInfo(data)
        )
    }, [])
    return (
        <div>
            <Navbar />
            <div className='info-container'>
                {
                    info.map(data => <div className='single-info' key={data._id}>
                        <h2>ID:{data.id}</h2>
                        <h2>NAME  : {data.name}</h2>
                        <h2>TOPIC: {data.topic}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllSubmission;
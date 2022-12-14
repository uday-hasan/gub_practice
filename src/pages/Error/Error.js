import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    const style = {
        display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center'
    }
    return (
        <div style={style}>
            <h1>ERROR 404!</h1>
            <h2>Page not found!</h2>
            <button onClick={() => navigate('/')}>GO TO HOME</button>
        </div>
    );
};

export default Error;
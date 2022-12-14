import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <ul>
                <li><Link to='/'>FORM</Link></li>
                <li><Link to='/allsubmission'>ALL SUBMISSION</Link></li>
            </ul>
        </header>
    );
};

export default Navbar;
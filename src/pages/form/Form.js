import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import './Form.css'
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
    const [nameSub, setNameSub] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const id = e.target.id.value
        const topic = e.target.topic.value;
        const information = { name, id, topic }
        fetch('https://gub-server-practice-sniu.vercel.app/information', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        }).then(res => {
            if (res.status === 404) {
                toast(`You already submitted your topic. Add by ${nameSub}`)
            }
            else {
                toast('Your submission was successful.')
                return res.json()
            }
        }).then(data => {
            setNameSub(data?.name)
        })
    }
    return (
        <div>
            <Navbar />
            <div className='form-div'>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <input type="text" name='name' placeholder='Enter your name' />
                    <input type="number" name='id' placeholder='Enter your id' />
                    <input type="text" name='topic' placeholder='Enter your topic' />
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
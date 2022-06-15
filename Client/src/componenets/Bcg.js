import React, { useState } from 'react';
import './Bcg.css';
const Bcg = () => {
    const [uname, setUname] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const handeAction = async (e) => {
        e.preventDefault();
        if (!(uname && mail)) return;

        const nUser = {
            uname,
            mail,
            phone
        };

        const res = await fetch('/tasks/anotherone', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(nUser)
        })
        const data = await res.json()
        console.log('data sent', data);

    }

    return (
        <div className="formm">
            <h1> contant me</h1>
            <form onSubmit={handeAction}>
                <br />
                <br />
                <input type='text' onChange={(e) => setUname(e.currentTarget.value)} placeholder='name / company_name' />
                <br />
                <br />
                <input type='text' onChange={(e) => setMail(e.currentTarget.value)} placeholder='email' />
                <br />
                <br />
                <input type='text' onChange={(e) => setPhone(e.currentTarget.value)} placeholder='phone' />
                <br />
                <br />
                <button className='btn' type='submit'> Send </button>
                <br />
                <br />
            </form>
        </div>

    )
}
export default Bcg
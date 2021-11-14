import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
     let history = useHistory();

    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [DoB, setDoB] = useState('');
    const [phone,setTel ] = useState('');
    const [address,setAdd ] = useState('');
   
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setDoB(localStorage.getItem('DoB'));
        setTel(localStorage.getItem('Phone'));
        setAdd(localStorage.getItem('Address'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);
    
//for update the API data
    const updateAPIData = () => {
        axios.put(`https://618faad6f6bf4500174849e1.mockapi.io/dummydata/${id}`, {
            firstName,
            lastName, DoB,phone, address,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input type="date" placeholder='DoB' value={DoB}  onChange={(e) => setDoB(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Telephone</label>
                    <input type="tel" placeholder='phone' value={phone}  onChange={(e) => setTel(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Adress</label>
                    <input type="text" placeholder='address' value={address}  onChange={(e) => setAdd(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}

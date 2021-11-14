import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Create() {
    let history = useHistory();
   
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [DoB, setDoB] = useState('01/01/1900');
    const [phone,setTel ] = useState('+91');
    const [address,setAdd ] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://618faad6f6bf4500174849e1.mockapi.io/dummydata/`, {
            firstName, lastName, DoB, phone, address, checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input text="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input type="date" placeholder='DoB' onChange={(e) => setDoB(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Telephone</label>
                    <input type="tel" placeholder='phone' onChange={(e) => setTel(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Adress</label>
                    <input type="text" placeholder='address' onChange={(e) => setAdd(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://618faad6f6bf4500174849e1.mockapi.io/dummydata/`)
            .then((response) => { 
                console.log(response.data) 
                setAPIData(response.data);
            })
        }, []);

    const setData = (data) => {
        let { id, firstName, lastName,DoB,phone, address, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('DoB', DoB);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Address', address);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://618faad6f6bf4500174849e1.mockapi.io/dummydata/`)
            .then((getData) => {
                setAPIData(getData.data);
                console.log(getData);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://618faad6f6bf4500174849e1.mockapi.io/dummydata/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Link to="/create" style= {{color:'white',background:"rgb(90, 119, 108)"}}>Create Record</Link> <br/>
            <br/>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                        <Table.HeaderCell>Telephone</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.DoB}</Table.Cell>
                                <Table.Cell>{data.phone}</Table.Cell>
                                <Table.Cell>{data.address}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
           
        </div>
    )
}

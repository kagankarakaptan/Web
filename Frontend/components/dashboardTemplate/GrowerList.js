import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Api from "../Api";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography'



const Orders = () => {
    const [values, setValues] = useState([]);

    const refresh = () => {
        Api.Growers().fetchAll()
            .then(res => {
                setValues(res.data);
            })
            .catch(err => {
                console.log(err.response.status);
            });
    }



    return (
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom> Growers 
            <Button variant="contained" style={{ float: "right" }} > <RefreshIcon color="primary" onClick={refresh} /> </Button></Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Creation Date</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Goverment ID Number</TableCell>
                        <TableCell>C.O.A Number</TableCell>
                        <TableCell>Mobile</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {values.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.created_at}</TableCell>
                            <TableCell>{row.full_name}</TableCell>
                            <TableCell>{row.govermentID}</TableCell>
                            <TableCell>{row.coa_number}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>
                                <ButtonGroup variant="contained" style={{ float: "right" }}>
                                    <Button><EditIcon color="primary" /></Button>
                                    <Button><DeleteIcon color="secondary" /></Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default Orders;
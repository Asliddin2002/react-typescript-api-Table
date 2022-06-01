import React, {useEffect, useState} from 'react';
import  TableBody  from '@mui/material/TableBody'
import  TableCell  from '@mui/material/TableCell'
import  TableContainer  from '@mui/material/TableContainer'
import  TableHead  from '@mui/material/TableHead'
import  TableRow  from '@mui/material/TableRow'
import  Paper  from '@mui/material/Paper'
import { Button, IconButton, Input, Table, Typography } from '@mui/material'
import { useTypedSelector } from './Redux/Hook.ts/UseSelectorTypeHook';
import { useDispatchHook } from './Redux/Hook.ts/UseDispatchHook';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { UseActionTypes } from './Redux/ActionTypes';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ItemList = () => {
    const dispatch = useDispatch()
    const {loading, data, error} = useTypedSelector((state) => state.data)
    const {Data} = useDispatchHook()

    useEffect(() => {
        Data()
    }, [])
//  console.log(data);

    if(loading) {
        <Typography sx = {{textAlign:"center"}} variant='h5'> Loading</Typography>
    }
    if(error) {
        <Typography sx = {{textAlign:"center"}} variant='h5'> {error}</Typography>
    }

    const handleEdit = (edit:boolean) => {
       edit = true
    }

    return (
        <Box >
            
                <TableContainer sx = {{ display:"flex", alignItems:"center", justifyContent:"center"}} component= {Paper}>
            <Table sx = {{maxWidth:"800px"}} aria-label="simple table">
                <TableHead sx = {{bgcolor:"crimson", width:"100%"}}>
                    <TableRow sx = {{color:"#fff"}}>
                        <TableCell sx = {{color:"#fff", fontSize:"20px", fontWeight:"500"}}>Personal Photo</TableCell>
                        <TableCell sx = {{color:"#fff", fontSize:"20px", fontWeight:"500"}} align='right'>Firstname</TableCell>
                        <TableCell sx = {{color:"#fff", fontSize:"20px", fontWeight:"500"}} align='right'> Lastname</TableCell>
                        <TableCell sx = {{color:"#fff", fontSize:"20px", fontWeight:"500"}} align='right'>Email</TableCell>
                        <TableCell sx = {{color:"#fff", fontSize:"20px", fontWeight:"500"}} align='right'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item:any) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                <img  src={item.avatar}/>
                            </TableCell>
                            <TableCell align="right"> {item.first_name} </TableCell>
                            <TableCell align="right">{item.last_name}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => dispatch({type:UseActionTypes.DELETE_ITEM, payload: item.id})} >< DeleteForeverIcon/></IconButton>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        
        
        </Box>
    );
}

export default ItemList;
import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import { Box } from '@mui/system';
import ModalComp from './components/Modal';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Box sx = {{ display:"flex", justifyContent:"space-evenly", mt:"2rem", width:"100%"}} >
      <ItemList/>
      <ModalComp/>
      </Box>  
      <ToastContainer/>
    </>
      
  );
}

export default App;

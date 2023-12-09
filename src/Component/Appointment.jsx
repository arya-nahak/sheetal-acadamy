import  Modal from './Modal'
import React, { useState } from "react";
import DisplayDT from "./DisplayDT";
import Button from '@mui/material/Button';


function Appointment() {
  

  const [more, setmore] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [addData,setaddData]=useState(-1)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setaddData(-1)
  };

  const myAddData = (id) =>{
    setaddData(id)
    handleClickOpen()
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Detail
      </Button>
      <DisplayDT rows={more} setmore={setmore} setaddData={myAddData}/>
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        more={more}
        setmore={setmore}

        addData={addData}
        setaddData={setaddData}
      />
    </>
  );
}

export default Appointment;

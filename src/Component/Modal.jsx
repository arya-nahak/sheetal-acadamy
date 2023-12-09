import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import moment from "moment/moment";

function Modal(props) {
  const [data, setdata] = useState({
    Id: "",
    AppointmentDate: "",
    PatientName: "",
    City: "",
    State: "",
    Zipcode: "",
    MobileNumber: "",
  });

  React.useEffect(() => {
    if (props.addData > 0) {
      let myobj = props.more.find((y) => y.id == props.addData);
      setdata(myobj);
    } else {
      setdata({
        Id: "",
        AppointmentDate: "",
        PatientName: "",
        City: "",
        State: "",
        Zipcode: "",
        MobileNumber: "",
      });
    }
  }, [props.addData]);

  const handlerChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const HandlerDate = (e) => {
    setdata({ ...data, AppointmentDate: e });
  };

  const saveData = (e) => {
    // e.preventDefault();
    let storeData = [...props.more];
    if (props.addData < 0) {
      storeData.push({ ...data, id: storeData.length + 1 });
    } else {
      let obj = storeData.find((d) => d.id == props.addData);

      obj.AppointmentDate = data.AppointmentDate;
      obj.PatientName = data.PatientName;
      obj.City = data.City;
      obj.MobileNumber = data.MobileNumber;
      obj.State = data.State;
      obj.Zipcode = data.Zipcode;
    }

    props.setmore(storeData);
    props.setaddData(-1);
    props.handleClose();
  };

  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Patient Detail</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Id"
            name="Id"
            label="ID"
            type="text"
            fullWidth
            variant="standard"
            value={data.Id}
            onChange={handlerChange}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Appointment Date"
                onChange={HandlerDate}
                value={data.AppointmentDate}
              />
            </DemoContainer>
          </LocalizationProvider>

          <TextField
            autoFocus
            margin="dense"
            id="PatientName"
            name="PatientName"
            label="Patient Name"
            type="email"
            fullWidth
            variant="standard"
            value={data.PatientName}
            onChange={handlerChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="City"
            name="City"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            value={data.City}
            onChange={handlerChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="State"
            name="State"
            label="State"
            type="text"
            fullWidth
            variant="standard"
            value={data.State}
            onChange={handlerChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="Zipcode"
            name="Zipcode"
            label="Zipcode"
            type="number"
            fullWidth
            variant="standard"
            value={data.Zipcode}
            onChange={handlerChange}
          />

          <TextField
            autoFocus
            margin="dense"
            name="MobileNumber"
            id="MobileNumber"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
            value={data.MobileNumber}
            onChange={handlerChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={saveData}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;

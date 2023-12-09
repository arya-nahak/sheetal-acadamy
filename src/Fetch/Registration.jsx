import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

function Registration() {
  const [data, setdata] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // const [info,setinfo]= useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios.post('https://real-pear-fly-kilt.cyclic.app/accounts/register',data)
    .then((y)=> console.log(y))
    toast.success("successfully registration")


  };

  const handleChange = (e) => {
    if (e.target.type !== "checkbox") {
      setdata({ ...data, [e.target.name]: e.target.value });
    } else {
      setdata({ ...data, [e.target.name]: e.target.checked });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="border border-dark bg-primary text-light p-2 mt-5 w-50">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title :-</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter Title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>FirstName :-</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter firstname"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Lastname :-</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter lastname"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address :-</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password :-</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password :-</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="acceptTerms">
          <Form.Check
            type="checkbox"
            name="acceptTerms"
            label="acceptTerms"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>

      
      
    </>
  );
}

export default Registration;

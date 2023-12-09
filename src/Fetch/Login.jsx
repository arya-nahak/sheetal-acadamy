import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import DisplayData from "./DisplayData";
import { toast } from "react-toastify";
import Play_Pause from "../Videof/Play_Pause";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", data)
      .then((y) => {
        console.log(y, "kl");
        setIsLogin(y.status)
        localStorage.setItem("user", JSON.stringify(y.data));
      });

    toast.success("successfully login");
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="border border-dark bg-primary text-light p-2 mt-5 w-50"
      >
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

        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>

      {isLogin==200?<DisplayData />:""}
      {/* <Play_Pause/> */}
    </>
  );
}

export default Login;

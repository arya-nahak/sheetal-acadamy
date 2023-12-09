import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

function Signup() {
  const data = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const submitHandler = (e) => {
    console.log(e);
  };

  const validateHandler = (el) => {
      // console.log(el);
      const errors = {};

    if(!el.firstName){
        errors.firstName = 'Please Enter  FirstName';
    }else if(el.firstName.length > 10){
        errors.firstName = "can't exceed 10 charcters";
    }

    if(!el.lastName){
        errors.lastName = 'Please Enter LastName';
    }

    if(!el.email){
        errors.email = 'Please Enter Email';
    }

    if(!el.password){
        errors.password = 'Please Enter Password';
    }

    return errors;
  };

  

  return (
    <Formik
      initialValues={data}
      validate={validateHandler}
      onSubmit={submitHandler}
    >
      {({ handlerReset }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" className="text-danger" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" className="text-danger" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" className="text-danger" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="div" className="text-danger" />

          <button type="submit">Submit</button>
          <button type="reset" onClick={handlerReset}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
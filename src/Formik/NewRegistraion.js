import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

function NewRegistraion() {
  const data = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    mobileNumber: "",
    acceptTerms: false,
  };

  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      middleName: Yup.string().required("Middle Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      userName: Yup.string()
        .required("Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.number()
        .required("Zipcode is required")
        .test("Zipcode must be at least 6 digit", value => !value || value.toString().length >= 6),
      mobileNumber: Yup.number().required("Mobile Number is required"),
      acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });
  };

  const submitHandler = (e) => {
    console.log(JSON.stringify(e));
  };

  return (
    <>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ handlerReset }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                className="form-control"
                type="text"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <Field
                id="middleName"
                name="middleName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="middleName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" className="form-control" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userName">UserName</label>
              <Field
                id="userName"
                name="userName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <Field
                id="city"
                name="city"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <Field
                id="state"
                name="state"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">country</label>
              <Field
                id="country"
                name="country"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="country"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipcode">zipcode</label>
              <Field
                id="zipcode"
                name="zipcode"
                type="number"
                className="form-control"
              />
              <ErrorMessage
                name="zipcode"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">mobileNumber</label>
              <Field
                id="mobileNumber"
                name="mobileNumber"
                type="number"
                className="form-control"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group form-check">
              <Field
                name="acceptTerms"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" onClick={handlerReset} className="btn">
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewRegistraion;

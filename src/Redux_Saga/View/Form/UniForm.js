import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

function UniForm() {
    
  const data = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const dis = useDispatch()


  const validationSchema = () => {
    return Yup.object().shape({
      title: Yup.string().required("T is required"),
      firstName: Yup.string().required("Middle Name is required"),
      lastName: Yup.string().required("Last Name is required"),
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
      acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });
  };

  const submitHandler = (e) => {
    console.log(JSON.stringify(e));
    dis({type: 'POSTREQUEST', payload:e})
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
              <label htmlFor="title">title</label>
              <Field
                id="title"
                name="title"
                className="form-control"
                type="text"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="firstName"
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

export default UniForm;

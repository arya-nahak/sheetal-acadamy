import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'

function Login() {

    const data = {
        email:"",
        password:""
    }

    const submitHandler = (e) =>{
        console.log(e);
    }

    const validateHandler = (e) =>{
        console.log(e);

        const errors = {}

        if(!e.email){
            errors.email=" Please enter email "
        }else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(e.EmailId)){
            errors.email = 'Invalid email address';
        }

        if(!e.password){
            errors.password=" please enter password "
        }

        return errors
    }



  return (
    <>
        <Formik initialValues={data} onSubmit={submitHandler} validate={validateHandler}>

        {({handlerreset})=>(

            <Form>
                <label htmlFor='email'>Email</label>
                <Field id="email" name="email" type="email"/>
                <ErrorMessage name='email' component="div" className='text-danger'/>


                <label htmlFor='password'>Password</label>
                <Field id="password" name="password" type="password"/>
                <ErrorMessage name='password' component="div" className='text-danger'/>


                <button type='submit'>Login</button>
                <button type='reset' onClick={handlerreset}>Reset</button>

            </Form>
        
        )}
        </Formik>
    </>
  )
}

export default Login
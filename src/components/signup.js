import React from 'react';
import { Formik, Form } from 'formik';
import { validateSchema } from '../schemas/validateSchema';
import FormField from './form-field';
import { useNavigate } from 'react-router-dom';
import '../style.css'; 

const SignUp = () => {
  const navigate = useNavigate();
  localStorage.clear('userData');
   const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   };


  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSubmit = async (values) => {
    try {
      localStorage.setItem('userData', JSON.stringify(values));
      alert('Sign up successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormField className="form-field" label="First Name" name="firstName" type="text" />
            <FormField className="form-field" label="Last Name" name="lastName" type="text" />
            <FormField className="form-field" label="Email" name="email" type="email" />
            <FormField className="form-field" label="Password" name="password" type="password" />
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
      <button onClick={handleLoginRedirect} style={{ marginTop: '20px' }}>Go to Login</button>
    </div>
  );
};

export default SignUp;
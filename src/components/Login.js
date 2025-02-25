import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormField from './form-field';
import { validateSchema } from '../schemas/loginSchema';
import '../style.css';
const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (
      userData &&
      userData.email === values.email &&
      userData.password === values.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormField className="form-field" label="Email" name="email" type="email"  />
            <FormField className="form-field" label="Password" name="password" type="password" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

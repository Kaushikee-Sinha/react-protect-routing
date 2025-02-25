import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormField from './form-field';
import { validateSchema } from '../schemas/validateSchema';
import '../style.css';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const data = JSON.parse(localStorage.getItem('userData'));
      setUserData(data);
    }
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (values) => {
    localStorage.setItem('userData', JSON.stringify(values));
    alert('Profile updated successfully!');
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Your Profile</h1>
      {userData && !isEditing ? (
        <div className="user-info">
          <h2>User Data</h2>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <button onClick={handleEdit} className="edit-button">
            Edit Profile
          </button>
        </div>
      ) : isEditing ? (
        <div className="edit-form">
          <h2>Edit Your Profile</h2>
          <Formik
            initialValues={userData}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FormField label="First Name" name="firstName" type="text" />
                <FormField label="Last Name" name="lastName" type="text" />
                <FormField label="Email" name="email" type="email" />
                <FormField label="Password" name="password" type="password" />
                <button type="submit" className="save-button">Save Changes</button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Home;

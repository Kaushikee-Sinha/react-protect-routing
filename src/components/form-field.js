import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormField = ({ label, name, type }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FormField;
import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Name is required')
    .min(2, 'Name should contain 2 or more characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name should contain 2 or more characters'),
  email: Yup.string()
    .email('Invalid format')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password length should be 8 or more'),
});
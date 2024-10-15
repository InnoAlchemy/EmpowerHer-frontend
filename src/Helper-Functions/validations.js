// src/utils/validations.js

export const validateSignUp = (values) => {
    const errors = {};
  
    if (!values.first_name.trim()) {
      errors.first_name = "First Name is required.";
    }
  
    if (!values.last_name.trim()) {
      errors.last_name = "Last Name is required.";
    }
  
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid.";
    }
  
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
  
    if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password is required.";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Passwords do not match.";
    }
  
    return errors;
  };
  
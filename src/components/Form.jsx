import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validate = (values) => {
    const errors = {};
    const nameRegex = new RegExp("^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$");

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Name must only contain alphabets";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password = "Password must be 8 to 20 characters long";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data : ", formData);
    const error = validate(formData); // {...}
    setInputErrors(error);
    if (!Object.keys(error).length)
      console.log("Form sumbitted succesfully : ", formData); // {}
  };

  return (
    <div className={styles.box}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="error">{inputErrors?.name}</p>
        </div>

        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{inputErrors?.email}</p>
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="error">{inputErrors?.password}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

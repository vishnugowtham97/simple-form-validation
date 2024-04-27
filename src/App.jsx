import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const { name, email, password, confirmPassword } = form;

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      validationErrors.password =
        "Password should contain at least 1 digit, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long";
    }

    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="form_container">
      <h2>Form Validation without 3rd party library</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter the name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <span>{error.name}</span>}
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter the email"
          value={form.email}
          onChange={handleChange}
        />
        {error.email && <span>{error.email}</span>}
        <label>D.O.B</label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="********"
          value={form.password}
          onChange={handleChange}
        />
        {error.password && <span>{error.password}</span>}
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="********"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPassword && <span>{error.confirmPassword}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

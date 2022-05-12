import React from 'react';

import { useForm } from '../hooks/useForm';
import { RegisterFormData } from '../interfaces/interfaces';
import './../styles/styles.css';

const initState: RegisterFormData = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    handleInputChange,
    resetForm,
    isValidEmail,
  } = useForm<RegisterFormData>(initState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submit');
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} /* noValidate */>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>This input is required!</span>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Invalid email!</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {password.trim().length <= 0 && <span>This input is required!</span>}
        {password.trim().length <= 6 && password.trim().length > 0 && (
          <span>The password must be at least 6 characters long!</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleInputChange}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>This input is required!</span>
        )}
        {repeatPassword.trim().length <= 6 &&
          repeatPassword.trim().length > 0 && (
            <span>The password must be at least 6 characters long!</span>
          )}
        {repeatPassword.trim().length > 6 &&
          password.trim().length > 0 &&
          password !== repeatPassword && (
            <span>Passwords must be the same!</span>
          )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

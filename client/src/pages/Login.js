import React, { useState } from 'react';
import '../css/Login.css';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';

function Login() {
  
  const [formData, setUserFormData] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData.email, formData.password);

    try {
      const { data } = await login({
        variables: {
          email: formData.email.toLowerCase(),
          password: formData.password
        }
      })
      Auth.login(data.login.token)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleFormSubmit} >
          <p>Log in</p>
          <input onChange={handleInputChange} value={formData.email} name="email" placeholder="EMAIL"></input>
          <input onChange={handleInputChange} value={formData.password} name="password" placeholder="PASSWORD"></input>
          { error === true && (
            <p className="bold">The provided credentials are incorrect</p>
          )}
          <button disabled={!(formData.email && formData.password)} onChange={handleInputChange} type="submit" variant="success">Log in</button>
        </form>
      </div>
    </>
  )
};

export default Login;
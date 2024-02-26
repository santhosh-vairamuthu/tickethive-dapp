import React, { useState } from 'react';
import './App.css';

function Login() {
  const LoginForm = (
    <form id="login" className='form'>
      <label className='fs-4 fw-bolder' htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required placeholder='Enter valid email id' />
      <label className='fs-4 fw-bolder' htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required placeholder='Enter your password' />
      <button className='btn fs-5' type="submit">Login</button>
    </form>
  );

  const SignUpForm = (
    <form id="signup" className='form'>
      <label className='fs-4 fw-bolder' htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required placeholder='Enter your name' />
      <label className='fs-4 fw-bolder' htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required placeholder='Enter valid email id' />
      <label className='fs-4 fw-bolder' htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required placeholder='Enter your password' />
      <button className='btn fs-5' type="submit">Sign Up</button>
    </form>
  );

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [account, setAccount] = useState("Don't have an account?");
  const [sign, setSign] = useState("Sign up");

  const switchState = () => {
    setIsLoginForm(!isLoginForm); // Toggle the mode
    setAccount(isLoginForm ? "Already have an account?" : "Don't have an account?");
    setSign(isLoginForm ? "Login" : "Sign up");
  };

  return (
    <div className="container Login">
      <h3 className='fs-3 mt-2 fw-bold'>{sign}</h3>
      {isLoginForm ? LoginForm : SignUpForm}
      <h5 className='mt-1'><span>{account}<button className="switch" onClick={switchState}>{sign === "Login" ? "Sign up" : "Login"}</button></span></h5>
    </div>
  );
}

export default Login;



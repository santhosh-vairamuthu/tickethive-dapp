import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEmail } from './EmailContext';

function Login(props) {
  const { isLoginForm } = props;
  const { setEmail } = useEmail();
  const [Form, setForm] = useState(isLoginForm);
  const nav = useNavigate();

  const [account, setAccount] = useState("Don't have an account?");
  const [sign, setSign] = useState("Login");

  useEffect(() => {
    if (!Form) {
      setAccount("Already have an account?");
      setSign("Sign up");
    } else {
      setAccount("Don't have an account?");
      setSign("Login");
    }
  }, [isLoginForm, Form]);

  const switchState = () => {
    setForm(!Form);
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };

    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.status === 201) {
        setEmail(formData.email);
        if(formData.email==='2112059@nec.edu.in'){
          nav('/admin');
        }
        else{
          nav('/account');
        }
      } else {
        alert("login failure");
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };

    try {
      const response = await axios.post('http://localhost:5000/signin', formData);

      if (response.status === 201) {
        setEmail(formData.email);
        if(formData.email==='2112059@nec.edu.in'){
          nav('/admin');
        }
        else{
          nav('/account');
        }
      } else {
        alert("Signin failure");
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const LoginForm = (
    <form id="login" className='form' method='post' onSubmit={handleSubmit}>
      <label className='fs-4 fw-bolder' htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required placeholder='Enter valid email id' />
      <label className='fs-4 fw-bolder' htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required placeholder='Enter your password' />
      <button className='btn fs-5' type="submit">Login</button>
    </form>
  );

  const SignUpForm = (
    <form id="signup" className='form' method='post' onSubmit={handleSignup}>
      <label className='fs-4 fw-bolder' htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required placeholder='Enter your name' />
      <label className='fs-4 fw-bolder' htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required placeholder='Enter valid email id' />
      <label className='fs-4 fw-bolder' htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required placeholder='Enter your password' />
      <button className='btn fs-5' type="submit">Sign Up</button>
    </form>
  );

  return ( 
  <div className=" row justify-content-center mt-5">
  <div className='col-8 col-sm-8 col-md-6 col-lg-4 Login mt-5'>
      <h3 className='fs-3 mt-2 fw-bold'>{sign}</h3>
      {Form ? LoginForm : SignUpForm}
      <h5 className='mt-1'><span>{account}<button className="switch" onClick={switchState}>{sign === "Login" ? "Sign up" : "Login"}</button></span></h5>
    </div>
    </div>
  );
}

export default Login;

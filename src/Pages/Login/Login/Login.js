import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/google_1.png';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle, setIsLoading, handleEmailChange, handlePasswordChange, error, handleLogin, setError } = useAuth();

  // redirect
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  }

  const handleEmailPasswordLogin = (event) => {
    event.preventDefault();
    handleLogin()
      .then(result => {
        history.push(redirect_uri);
        setError('');
      })
      .catch(error => setError(error.message));
  }

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center pb-3">Log in Here</h1>
        <div className="input-area">
          <form onSubmit={handleEmailPasswordLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onBlur={handleEmailChange} type="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onBlur={handlePasswordChange} type="password" className="form-control input-field" id="exampleInputPassword1" required />
            </div>
            <div className="mb-3 form-check">
              {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Already have an account?</label> */}
              Don't have an account? <Link to="/register">Create an account</Link>
            </div>
            {/* <button type="submit" className="btn btn-primary">Sign up</button> */}
            <div className="my-3 text-danger">{error}</div>
            <input type="submit" value="Login" className="regular-btn" />
          </form>

          <div className="py-4 text-center">-------------- or Sign in with ------------</div>
          <div className="signin-tools">
            <button onClick={handleGoogleLogin} className="btn signin-btn"><img src={googleIcon} alt="" /></button>
            <button className="btn signin-btn"><i className="fab fa-facebook-f"></i></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
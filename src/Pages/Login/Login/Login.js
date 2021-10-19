import React from 'react';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/google_1.png';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center pb-3">Sign up Here</h1>
        <div className="input-area">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control input-field" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Already have an account?</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>

          <div className="py-4">-------------- or Sign in with ------------</div>
          <div className="signin-tools">
            <button onClick={signInUsingGoogle} className="btn signin-btn"><img src={googleIcon} alt="" /></button>
            <button className="btn signin-btn"><i className="fab fa-facebook-f"></i></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
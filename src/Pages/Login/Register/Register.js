import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import googleIcon from '../../../images/google_1.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const { handleEmailChange, handlePasswordChange, handleRegistration, error, signInUsingGoogle, setIsLoading } = useAuth();
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
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center pb-3">Sign up Here</h1>
        <div className="input-area">
          <form onSubmit={handleRegistration}>
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
              <Link to="/login">Already have an account?</Link>
            </div>
            {/* <button type="submit" className="btn btn-primary">Sign up</button> */}
            <div className="my-3 text-danger">{error}</div>
            <input type="submit" value="Register" />
          </form>

          <div className="py-4">-------------- or Sign in with ------------</div>
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

export default Register;
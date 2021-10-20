import React from 'react';
import doctor from '../../../images/doctor.jpg';

const Appoinment = () => {
  return (
    <div className="appoinment-section my-5">
      <div className="container">
        <h1 className="mb-5 fw-bold text-secondary">Make an appointment</h1>
        <div className="row">
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingName" placeholder="Name" />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="date" className="form-control" id="floatingDate" placeholder="Date" />
              <label htmlFor="floatingDate">mm/dd/yyyy</label>
            </div>
            <button className="btn regular-btn mt-3">Send Message</button>
          </div>
          <div className="col-lg-6 text-start lh-lg order-1 order-lg-2">
            <div className="row">
              <div className="col-md-5">
                <table>
                  <tbody>
                    <tr>
                      <td>Monday :</td>
                      <td className="ps-3">8:30 – 9:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday :</td>
                      <td className="ps-3">8:30 – 9:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday :</td>
                      <td className="ps-3">8:30 – 9:00</td>
                    </tr>
                    <tr>
                      <td>Thursday :</td>
                      <td className="ps-3">8:30 – 9:00</td>
                    </tr>
                    <tr>
                      <td>Friday :</td>
                      <td className="ps-3">8:30 – 9:00</td>
                    </tr>
                    <tr>
                      <td>Saturday :</td>
                      <td className="ps-3">Closed</td>
                    </tr>
                    <tr>
                      <td>Sunday :</td>
                      <td className="ps-3">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-7">
                <img src={doctor} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
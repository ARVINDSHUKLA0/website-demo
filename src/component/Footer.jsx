import React from "react";
import "../componentStyle/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">

          {/* Left */}
          <div className="col-lg-4 col-md-6">
            {/* <h2 className="footer-logo">WISO</h2> */}
            <img className="img-fluid" src="/assets/img/logo.png" width={100} alt="" />

            <div className="social-icons mt-5">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-behance"></i>
            </div>

            <p className="copyright mt-5">
              © Arvind Shukla by 2026. All Right Reserved.
            </p>
          </div>

          {/* Center */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-title">INFORMATION</h6>

            <div className="info-content">
              <p>
                n.a,
                <br />n.a
              </p>

              <p>info@yourdomain.com</p>

              <p>(+68) 120034509</p>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-4">
            <h6 className="footer-title">SUBSCRIBE</h6>

            <div className="subscribe-box">
              <input
                type="email"
                placeholder="Enter your-email"
              />
              <button>
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>

            <p className="spam-text mt-4">
              No spam, we promise
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
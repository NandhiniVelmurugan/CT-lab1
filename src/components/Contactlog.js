import React from 'react';
import './Contact.css';
import Navlog from '../components/Navlog'; // Import your CSS file

const ContactForm = () => {
  return (
    <div className="container-fluid">
      <Navlog/>
      <div className="my-custom-row">
        <div className="Hero Parallax aa-contact-us-page-hero-image col-xs-12">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2>Contact Us</h2>
              <h3>If you’re thinking about studying abroad, sign up for our contact list! We will contact you within 24h. If you want to learn more about our services, visit the About Us section.</h3>
            </div>
          </div>
          <a className="contact-form-anchor-link" href="#contact-form"> {/* Added href attribute */}
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-angle-down fa-stack-1x" style={{ fontSize: '1.5em' }}></i>
            </span>
          </a>
        </div>
      </div>
      <div className="contact-background">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="contact-form-box"> {/* Added a container for the form */}
              <h2>Get in Touch</h2>
              <form id="contact-form" name="contact_form" action="contact-mail.php" method="post">
              <div className="form-group">
  <label htmlFor="name">Your Name:</label>
  <input
    type="text"
    className="form-control"
    id="name"
    placeholder="Your Name"
    name="name"
  />
</div>
<div className="form-group">
  <label htmlFor="email">E-mail:</label>
  <input
    type="email"
    className="form-control"
    id="email"
    placeholder="E-mail"
    name="email"
    required
  />
</div>
<div className="form-group">
  <label htmlFor="phone">Phone Number:</label>
  <input
    type="text"
    className="form-control"
    id="phone"
    placeholder="Phone Number"
    name="phone"
  />
</div>
<div className="form-group">
  <label htmlFor="subject">Subject:</label>
  <input
    type="text"
    className="form-control"
    id="subject"
    placeholder="Subject"
    name="subject"
  />
</div>
<div className="form-group">
  <label htmlFor="message">Message:</label>
  <textarea
    className="form-control"
    id="message"
    placeholder="Your Message"
    name="message"
  ></textarea>
</div>

                <div className="form-group single-input-fieldsbtn">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send Now"
                  />
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

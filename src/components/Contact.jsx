import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
    <p className="text-center text-muted mb-5">
        Have questions? We’d love to hear from you! Fill out the form below or reach us at our office.
      </p>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form> 
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <h4>Our Office</h4>
          <p className="text-muted">📍 123 Market Street, City</p>
          <p className="text-muted">📞 +91 98765 43210</p>
          <p className="text-muted">✉️ support@shopease.com</p>

          <h5 className="mt-4">Follow Us</h5>
          <p>
            <a href="#" className="text-decoration-none me-3">Facebook</a>
            <a href="#" className="text-decoration-none me-3">Instagram</a>
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

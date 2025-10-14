import React from "react";

function Footer() {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <div className="row">
          
          
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold">ShopEase</h3>
            <p className="small">
              Your one-stop shop for fashion, electronics, and more.  
              Quality products at the best prices.
            </p>
          </div>

       
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Contact</h5>
            <p className="small">📍 123 Market Street, City</p>
            <p className="small">📞 +91 98765 43210</p>
            <p className="small">✉️ support@shopease.com</p>
          </div>
        </div>

        
        <hr className="border-secondary" />
        <div className="text-center small text-secondary">
           © 2025 ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

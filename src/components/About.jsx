import React from "react";

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Us</h1>
      
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <h3>Welcome to ShopEase</h3>
          <p className="text-muted">
            ShopEase is your trusted online shopping destination for fashion, 
            electronics, and more. We aim to deliver top-quality products at 
            the best prices, right to your doorstep.
          </p>
          <p className="text-muted">
            With a wide range of collections and a secure shopping experience, 
            we make online shopping simple, fast, and enjoyable.
          </p>
          <button className="btn btn1 btn-primary mt-2">Shop Now</button>
        </div>

      </div>
    </div>
  );
}

export default About;

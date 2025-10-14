import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "./Footer";
import styles from "../styles/cart.module.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`container container1 py-5 ${styles.container1}`}>
      <h1 className={`text-center mb-5 ${styles.cartTitle}`}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-muted mb-5">Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`card mb-3 shadow-sm ${styles.cartItem}`}
              >
                <div className="row g-0">
                  {/* Product Image */}
                  <div className="col-md-3">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      className="img-fluid rounded-start"
                      alt={item.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="col-md-9">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-muted">
                          Price: ₹{item.price}
                        </p>
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="col-md-4">
            <div className={`card shadow-sm p-3 ${styles.cartSummary}`}>
              <h4>Cart Summary</h4>
              <hr />
              <p>Total Items: {cart.length}</p>
              <p className="fw-bold">Total Price: ₹{totalPrice.toFixed(2)}</p>
              <button className="btn btn-success w-100">Proceed to Checkout</button>
              
            </div>
          </div>
        </div>
      )}

    
    </div>
  );
}

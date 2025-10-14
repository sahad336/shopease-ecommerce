import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/ProductSlice";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selected, loading } = useSelector((state) => state.products);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (loading || !selected) return <p>Loading...</p>;

  return (
    <div className="row mt-4 mb-4 m-2">
      <div className="col-md-5">
        <img src={selected.image} alt={selected.title} className="img-fluid border rounded p-3" />
      </div>
      <div className="col-md-7">
        <h3>{selected.title}</h3>
        <p className="fw-bold">₹{(selected.price * 82).toFixed(0)}</p>
        <p>{selected.description}</p>
        <button className="btn btn-primary" onClick={() => addToCart(selected)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;

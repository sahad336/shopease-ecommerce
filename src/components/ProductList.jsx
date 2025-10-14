import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import { NavLink } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const filtered = selectedCategory === "all"
    ? items
    : items.filter((p) => p.category === selectedCategory);

  return (
    <div className="row m-4 row1">
      {filtered.map((p) => (
        <div key={p.id} className="col-md-3 mt-4">
          <div className="card card1 text-center">
            <NavLink to={`/products/${p.id}`} className="text-decoration-none text-dark">
              <img className="card-img-top" src={p.image} alt={p.title} />
              <p>{p.title}</p>
              <div>₹{p.price}</div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productReducer,
  },
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakereducer from "../features/cake/cakeslice";
import logger from "redux-logger";
import icereducer from "../features/iceCream/icecreamSlice";
import chocreducer from "../features/chocolates/chocslice";
import cartreducer from "../features/cart/cartslice";
import flowerreducer from "../features/flower/flowerSlice";
import userReducer from "../features/Users/userSlice";
import productReducer from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    cake: cakereducer,
    ice: icereducer,
    chocolate: chocreducer,
    cart: cartreducer,
    flower: flowerreducer,
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;

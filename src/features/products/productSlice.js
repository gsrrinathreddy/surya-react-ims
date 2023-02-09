import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchproducts = createAsyncThunk("user/fetchproducts", () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((response) => response.data.products);
});
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchproducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;

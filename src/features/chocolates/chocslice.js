import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfchoclates: 100,
  orderChcos: 0,
  chocList: {
    qty: 0,
    name: null,
    price: null,
    discountedPrice: null,
  },
};

const chocoSlice = createSlice({
  name: "chocolate",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfchoclates -= action.payload;
      state.orderChcos += parseInt(action.payload.qty);
      state.chocList.qty = action.payload.qty;
      state.chocList.name = action.payload.title;
      state.chocList.price = action.payload.price;
      state.chocList.discountedPrice = action.payload.discountedPrice;
    },
    restocked: (state, action) => {
      state.noOfchoclates += action.payload;
    },
    cancelled: (state, action) => {
      state.orderChcos -= parseInt(action.payload);
    },
  },
});
export default chocoSlice.reducer;
export const { ordered, restocked, cancelled } = chocoSlice.actions;

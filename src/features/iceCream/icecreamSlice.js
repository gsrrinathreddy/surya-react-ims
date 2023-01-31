import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOficecreams: 150,
  noOfordered: 0,
  icecreamList: {
    qty: 0,
    name: null,
    price: null,
    discountedPrice: null,
  },
};

const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (action.payload > state.noOficecreams) {
        console.log("out of stock");
      } else {
        state.noOficecreams -= action.payload.qty;
        state.noOfordered += parseInt(action.payload.qty);
        state.icecreamList.qty = action.payload.qty;
        state.icecreamList.name = action.payload.title;
        state.icecreamList.price = action.payload.price;
        state.icecreamList.discountedPrice = action.payload.discountedPrice;
      }
    },
    restocked: (state, action) => {
      state.noOficecreams += action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      if (action.payload >= 5) {
        state.noOficecreams--;
        state.noOfordered++;
      }
    },
  },
});
export default iceSlice.reducer;
export const { ordered, restocked } = iceSlice.actions;

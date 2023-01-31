import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfcakes: 99,
  noOfordered: 0,
  cakeList: {
    qty: 0,
    name: null,
    price: null,
    discountedPrice: null,
  },
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (action.payload > state.noOfcakes) {
        console.log("out of stock");
      } else {
        state.noOfcakes -= action.payload.qty;
        state.noOfordered += parseInt(action.payload.qty);

        state.cakeList.qty = action.payload.qty;
        state.cakeList.name = action.payload.title;
        state.cakeList.price = action.payload.price;
        state.cakeList.discountedPrice = action.payload.discountedPrice;
      }
    },
    restocked: (state, action) => {
      state.noOfcakes += action.payload;
    },
    cancelled: (state, action) => {
      if (action.payload > state.noOfordered) {
        console.log("out of stock");
      } else {
        state.noOfordered -= action.payload;
        state.noOfcakes += action.payload;
      }
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked, cancelled } = cakeSlice.actions;

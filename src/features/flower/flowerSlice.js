
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfflowers:100,
    orderflowers:0,
    flowersList:{

        qty:0,
        name:null,
        price:null,
        discountedPrice:null    
  
    }
}

const flowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.noOfflowers-=action.payload;
            state.orderflowers+=parseInt(action.payload.qty)
            
            state.flowersList.qty=action.payload.qty;
            state.flowersList.name=action.payload.title;
            state.flowersList.price=action.payload.price;
            state.flowersList.discountedPrice=action.payload.discountedPrice;
        },
        restocked:(state,action)=>{
            state.noOfflowers+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderflowers-=parseInt(action.payload)
        }
    }
})
export default flowerSlice.reducer
export const{ordered,restocked,cancelled}=flowerSlice.actions
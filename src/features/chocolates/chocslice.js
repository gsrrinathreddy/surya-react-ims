import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfchoclates:100,
    orderChcos:0
}

const chocoSlice=createSlice({
    name:'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.noOfchoclates-=action.payload;
            state.orderChcos+=parseInt(action.payload)
        },
        restocked:(state,action)=>{
            state.noOfchoclates+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderChcos-=parseInt(action.payload)
        }
    }
})
export default chocoSlice.reducer
export const{ordered,restocked,cancelled}=chocoSlice.actions
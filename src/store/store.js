import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakereducer from '../features/cake/cakeslice';
import logger from 'redux-logger'
import icereducer from '../features/iceCream/icecreamSlice';
import chocreducer from '../features/chocolates/chocslice'
const store=configureStore({
    reducer:{
        cake:cakereducer,
        ice:icereducer,
        chocolate:chocreducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;

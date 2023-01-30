import { useSelector,useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { ordered,cancelled} from "../../features/cake/cakeslice";
import { useEffect, useState } from "react";
import { ordered as icecreamorder } from "../../features/iceCream/icecreamSlice";
import { ordered as chocorder } from "../../features/chocolates/chocslice";



export default function CartsPage(){

  const dispatch=useDispatch()
  const orderedcakes=useSelector((state)=>state.cake.noOfordered)
  const orderedicecreams=useSelector((state)=>state.ice.noOfordered)
  const chocs=useSelector((state)=>state.chocolate.orderChcos)

    return(
        <>
        { <Box sx={{ width:'100%',backgroundColor:'peachpuff', textAlign:'left' }}>
        Your Orders:
        <br/>
      
      no of cakes ordered:{orderedcakes}
      <Button onClick={()=>{
        dispatch(ordered(1))
      }}>
        +Add 
      </Button>
      <Button onClick={()=>{
      
      if(orderedcakes>=1){
        dispatch(cancelled(1))
      }else{
        console.log("out of stock")
      }}
      }>-Del</Button>
      <br/>
      no of icecreams ordered:{orderedicecreams}
 
      <Button onClick={()=>{
        dispatch(icecreamorder(1))
      }}>
        +Add 
      </Button>
      <br/>
        no of chocolates ordered:{chocs}
 
      <Button onClick={()=>{
      dispatch(chocorder(1))
      }}>
      +Add 
      </Button>

        </Box> }
      
        </>
    )
}
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Button, Typography, Grid } from "@mui/material";
import { ordered, cancelled } from "../../features/cake/cakeslice";
import { useEffect, useState } from "react";
import { ordered as icecreamorder } from "../../features/iceCream/icecreamSlice";
import { ordered as chocorder } from "../../features/chocolates/chocslice";
import { useNavigate } from "react-router-dom";

export default function CartsPage() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  const navigate = useNavigate();
  let sum = 0;

  return (
    <>
      <Box>
        Order Details:
        <Grid container>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Name
            </Typography>

            {cartList.map((item) => {
              return <Typography>{item.title}</Typography>;
            })}
          </Grid>

          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ActualPrice
            </Typography>

            {cartList.map((item) => {
              return <Typography>{item.price}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Price
            </Typography>

            {cartList.map((item) => {
              return <Typography>{item.discountedPrice}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Quantity
            </Typography>

            {cartList.map((item) => {
              return <Typography>{item.qty}</Typography>;
            })}
          </Grid>

          <Grid>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total
            </Typography>

            {cartList.map((item) => {
              sum += item.qty * item.discountedPrice;
              return <Typography>{item.qty * item.discountedPrice}</Typography>;
            })}
            <h4>amount to be paid:{sum}</h4>
          </Grid>
        </Grid>
      </Box>
      {/* 
                <Button onClick={()=>navigate('order-summary')}>Place Order</Button> */}
    </>
  );
}

import { Button, Typography } from "@mui/material";
import { margin } from "@mui/system";
import { useSelector } from "react-redux";
import Address from "../../components/Address";
import RadioButtons from "../../components/radiobutton";
import Box from "@mui/material/Box";

export default function Paymentpage() {
  let sum = 0;

  const cartlist = useSelector((state) => state.cart.cartList);

  return (
    <>
      <Box alignContent="baseline">
        <h3>Please Give Delivery Address</h3>

        <Address />
        <br />

        <p1>
          <b>Select Payment Methods :</b>
        </p1>
        <br />
        <left>
          <RadioButtons
            text1={"upi"}
            text2={"net banking"}
            text3={"credit/debit cards"}
          />
        </left>
        <h4>Toatal Amount</h4>
        {cartlist.map((item) => {
          sum += item.qty * item.discountedPrice;
        })}
        <h2>{sum}</h2>

        <right>
          <Button
            sx={{
              backgroundColor: "green",
              textColor: "white",
              marginLeft: "700px",
            }}
          >
            Payment
          </Button>
        </right>
      </Box>
    </>
  );
}

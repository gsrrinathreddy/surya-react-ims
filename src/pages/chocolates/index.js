import choc1 from "../../assets/Chocolates/Almond_surprise_truffle_chocolates.jpg";
import choc2 from "../../assets/Chocolates/Amul_dark_chocolate.jpg";
import choc3 from "../../assets/Chocolates/Basket_of_ferrero_rocher.jpg";
import choc4 from "../../assets/Chocolates/Box_of_assorted_chocolates.jpg";
import MediaCard from "../../components/Mediacard";
import { Grid } from "@mui/material";
import { ordered } from "../../features/chocolates/chocslice";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Feedback } from "@mui/icons-material";

export default function ChocData() {
  const choclist = [
    {
      chocname: "almond",
      img: choc1,
      price: "120",
      discountedPrice: "100",
      label: "bestseller",
      clr: "success",
    },
    {
      chocname: "amul",
      img: choc2,
      price: "120",
      discountedPrice: "100",
      label: "Premium",
      clr: "secondary",
    },
    {
      chocname: "ferrero",
      img: choc3,
      price: "120",
      discountedPrice: "100",
      label: "pro",
      clr: "primary",
    },
    {
      chocname: "almond",
      img: choc4,
      price: "120",
      discountedPrice: "100",
      label: "onlyfew left",
      clr: "warning",
    },
  ];

  let ordername = "chocolate";
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "black" }}
      >
        {choclist.map((iceitem, index) => {
          return (
            <Grid
              display="flex"
              justifyContent="center"
              xs={4}
              sm={4}
              md={4}
              pt={4}
            >
              <MediaCard
                title={iceitem.chocname}
                photo={iceitem.img}
                price={iceitem.price}
                discountedPrice={iceitem.discountedPrice}
                caption={iceitem.label}
                clr={iceitem.clr}
                order={ordered}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{ backgroundColor: "silver" }}
        display="flex"
        justifyContent="space-between"
        pt={5}
      >
        <h4>Connect with Us</h4>

        <FacebookIcon />

        <InstagramIcon />

        <LinkedInIcon />
      </Box>
    </>
  );
}

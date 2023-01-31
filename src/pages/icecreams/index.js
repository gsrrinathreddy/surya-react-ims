import vanilla from "../../assets/Icecreams/vanilla.jpg";
import ube from "../../assets/Icecreams/ube.jpg";
import teaberry from "../../assets/Icecreams/teaberry.jpg";
import strawberry from "../../assets/Icecreams/strawberry.jpg";
import salted_caramel from "../../assets/Icecreams/salted-caramel.jpg";
import pistachio from "../../assets/Icecreams/pistachio.jpg";
import moose_tracks from "../../assets/Icecreams/moose-tracks.jpg";
import mint_chip from "../../assets/Icecreams/mint-chip.jpg";
import mango from "../../assets/Icecreams/mango.jpg";
import cookies_n_cream from "../../assets/Icecreams/cookies-n-cream.jpg";
import coffee from "../../assets/Icecreams/coffee.jpg";
import chocolate from "../../assets/Icecreams/chocolate.jpg";
import choco_chip from "../../assets/Icecreams/chocolate-chip.jpg";
import cherry_gracia from "../../assets/Icecreams/cherry-garcia.jpg";
import butterscotch from "../../assets/Icecreams/butterscotch.jpg";
import butter_pecan from "../../assets/Icecreams/butter-pecan.jpg";
import bubble_gum from "../../assets/Icecreams/bubble-gum.jpg";

import { Grid } from "@mui/material";

import MediaCard from "../../components/Mediacard";
import { ordered } from "../../features/iceCream/icecreamSlice";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Feedback } from "@mui/icons-material";

export default function Icecreamdata() {
  const iceCreamlist = [
    {
      Icecreamname: "Vanilla",
      img: vanilla,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "Bubble_gum",
      img: bubble_gum,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "butter_peacan",
      img: butter_pecan,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "chocochip",
      img: choco_chip,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "chocolate",
      img: chocolate,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "butterscotch",
      img: butterscotch,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "cherry_gracia",
      img: cherry_gracia,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "coffee",
      img: coffee,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "cookies_n_cream",
      img: cookies_n_cream,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "mango",
      img: mango,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "mint_chip",
      img: mint_chip,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "moose_tracks",
      img: moose_tracks,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "pistachio",
      img: pistachio,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "strawberry",
      img: strawberry,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "teaberry",
      img: teaberry,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "ube",
      img: ube,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
    {
      Icecreamname: "salted_caramel",
      img: salted_caramel,
      price: "80",
      discountedPrice: "60",
      label: "bestseller",
      clr: "success",
    },
  ];

  let ordername = "icecream";
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "black" }}
      >
        {iceCreamlist.map((iceitem, index) => {
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
                title={iceitem.Icecreamname}
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

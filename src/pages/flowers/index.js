import {
  ordered,
  restocked,
  cancelled,
} from "../../features/flower/flowerSlice";
import * as React from "react";
import { useSelector } from "react-redux";
import BakingoCake from "../../assets/flowers/image1.png";
import CakeSquare from "../../assets/flowers/image2.png";
import ChocolateFunfetti from "../../assets/flowers/image3.png";
import Chocolate from "../../assets/flowers/image4.png";
import CocomelonCake from "../../assets/flowers/image5.png";
import EgglessChocolate from "../../assets/flowers/image6.png";
import FondantWedding from "../../assets/flowers/image7.png";
import FunfettiCupcakes from "../../assets/flowers/image8.png";
import Grapeberry from "../../assets/flowers/image9.png";
import NumberCakes from "../../assets/flowers/image10.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import { Feedback } from "@mui/icons-material";
import Box from "@mui/material/Box";
import MediaCard from "../../components/Mediacard";

export default function Flowers() {
  //   const theme = useTheme();
  //   const [personName, setPersonName] = React.useState([]);
  //   const handleChange = (event) => {
  //     const {
  //       target: { value },
  //     } = event;

  //     setPersonName(
  //       // On autofill we get a stringified value.

  //       typeof value === "string" ? value.split(",") : value
  //     );
  //   };

  const flowersList = [
    {
      title: "Orange Blossom",
      clr: "success",
      subheader: "Powered by Nature",

      cardMedia: BakingoCake,

      price: 100,

      discountedPrice: 75,

      rating: 4.2,

      sellingStatus: "Best Seller",
    },

    {
      title: "Stramonium",

      subheader: "April showers bring May flowers",

      cardMedia: CakeSquare,

      price: 145,

      discountedPrice: 125,
      clr: "success",
      rating: 4.3,

      sellingStatus: "Premium",
    },

    {
      title: "Star Jasmine",

      subheader: "Let love grow",

      cardMedia: ChocolateFunfetti,

      price: 200,

      discountedPrice: 155,
      clr: "success",
      rating: 4.5,

      sellingStatus: "Out of Stock",
    },

    {
      title: "Primrose",

      subheader: "Be nice or leaf",

      cardMedia: Chocolate,

      price: 145,

      discountedPrice: 125,
      clr: "success",
      rating: 4.8,

      sellingStatus: "Best Seller",
      clr: "success",
    },

    {
      title: "Glory Lily",

      subheader: "Life is better with flowers",

      cardMedia: CocomelonCake,

      price: 135,

      discountedPrice: 95,

      rating: 4.8,
      clr: "success",
      sellingStatus: "Best Seller",
    },

    {
      title: "Peacock Flower",
      subheader: "Soul speaks in flowers",
      cardMedia: EgglessChocolate,
      price: 120,
      discountedPrice: 105,
      rating: 3.8,
      clr: "success",
      sellingStatus: "Best Seller",
    },
    {
      title: "Pansy",
      subheader: "Wall flower",
      cardMedia: FondantWedding,
      price: 120,
      discountedPrice: 105,
      rating: 3.8,
      clr: "success",
      sellingStatus: "Best Seller",
    },
    {
      title: "Oleander",
      subheader: "Flowers bloom after rain falls",
      cardMedia: FunfettiCupcakes,
      price: 200,
      discountedPrice: 155,
      raing: 4.5,
      clr: "success",
      sellingStatus: "Out of Stock",
    },

    {
      title: "Narcissus",
      subheader: "The Earth laughs in flowers",
      cardMedia: Grapeberry,
      price: 120,
      discountedPrice: 105,
      clr: "success",
      rating: 3.8,
      sellingStatus: "Best Seller",
    },

    {
      title: "Magnolia",
      subheader: "Life is too short not to buy flowers",
      cardMedia: NumberCakes,
      price: 180,
      discountedPrice: 145,
      rating: 4.4,
      sellingStatus: "Best Seller",
      clr: "success",
    },
  ];

  const ITEM_HEIGHT = 30;

  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,

        width: 250,
      },
    },
  };

  const names = [
    "Popularity",

    "New Arrival",

    "Fast Delivery",

    "High-Low",

    "Low-High",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#FA8072" : "#fff",

    ...theme.typography.body2,

    padding: theme.spacing(1),

    textAlign: "center",

    color: theme.palette.text.secondary,
  }));

  let ordername = "flower";

  return (
    <>
      {/* <Box>

      <FormControl sx={{ m: 1, width: 300, display:'flex', justifyContent:'flex-end'}}>

        <InputLabel id="demo-multiple-name-label">Sort By</InputLabel>

        <Select

          labelId="demo-multiple-name-label"

          id="demo-multiple-name"

          multiple

          value={personName}

          onChange={handleChange}

          input={<OutlinedInput label="Name" />}

          MenuProps={MenuProps}

        >

          {names.map((name) => (

            <MenuItem

              key={name}

              value={name}

              style={getStyles(name, personName, theme)}

            >

              {name}

            </MenuItem>

          ))}

        </Select>

      </FormControl>

    </Box>

 */}

      <br />

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "black" }}
      >
        {flowersList.map((flower, index) => {
          return (
            <Grid
              display="flex"
              justifyContent="center"
              xs={3}
              sm={3}
              md={3}
              pt={3}
            >
              <MediaCard
                title={flower.title}
                photo={flower.cardMedia}
                price={flower.price}
                discountedPrice={flower.discountedPrice}
                caption={flower.sellingStatus}
                clr={flower.clr}
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

      {/* <Box sx={{backgroundColor:'#FF4E84'}} display='flex' alignItems='center'justifyContent='space-between' pt={5} pb={10}>

        <img height='70px' width='160px'src='https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/hygenic.jpg' alt="safety"></img>

        <img height='70px' width='160px'src='https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/purchaseprotection.jpg' alt="safety"></img>

        <Feedback/>

        </Box> */}
    </>
  );
}

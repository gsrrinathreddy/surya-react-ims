import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, TextField } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { ordered as ckorder } from "../../features/cake/cakeslice";
import Sbar from "../Sbar";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chip from "@mui/material/Chip";
import { ordered as iceOrd } from "../../features/iceCream/icecreamSlice";
import Stack from "@mui/material/Stack";
import { ordered as chocorder } from "../../features/chocolates/chocslice";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function MediaCard(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const noOfcakes = useSelector((state) => state.cake.noOfcakes);
  const orderedcakes = useSelector((state) => state.cake.noOfordered);
  const orderedicecreams = useSelector((state) => state.ice.noOfordered);
  let sum = orderedcakes + orderedicecreams;

  let caption = props.caption;
  let Itemname = props.Itemname;
  let title = props.title;
  let photo = props.photo;
  let price = props.price;
  let discountedPrice = props.discountedPrice;
  let clr = props.clr;
  let orderPlaced = props.order;

  const [expanded, setExpanded] = React.useState(false);
  const [qty, setQty] = React.useState(1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let params = {
    title: title,
    price: price,
    discountedPrice: discountedPrice,
    qty: parseInt(qty),
  };

  return (
    <Card
      sx={{ maxWidth: 350, marginLeft: "20px", backgroundColor: "lightgrey" }}
    >
      <CardHeader title={title} />
      {/* <Chip label={caption} color={clr}/> */}
      <Card sx={{ maxWidth: "300px", marginLeft: " 20px" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="150"
            image={photo}
            alt={Itemname}
          />
          <Box
            sx={{
              position: "absolute",
              alignItems: "flex-end",
              color: "white",
              top: 0,
              left: "85%",
              transform: "translateX(-50%)",
            }}
          >
            <Stack spacing={1}>
              <Chip label={caption} color={clr}></Chip>
            </Stack>
          </Box>
          <Stack
            direction="row"
            flexDirection="row"
            justifyContent="flex-end"
            spacing={1}
          >
            {/* <Chip label={rating} col={colwarning}></Chip> */}
          </Stack>
        </Box>
      </Card>
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <TextField
          sx={{ width: "70px" }}
          size="small"
          id="outlined-basic"
          variant="outlined"
          defaultValue={1}
          onChange={(e) => setQty(e.currentTarget.value)}
        />

        <Box>
          <Button
            sx={{ width: "130px" }}
            size="small"
            variant="contained"
            aria-label="cart "
            color="warning"
            onClick={() => {
              dispatch(orderPlaced(params));
            }}
          >
            <Sbar msg1={qty + " items  added to cart"} />
            ADD
            <Avatar src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" />
          </Button>
        </Box>

        {/* <IconButton aria-label="add to favorites" onClick={()=>setCount(count+1)}>
          {count} likes
          <FavoriteIcon />
        </IconButton> */}
        <br />
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        {/*       
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>

      <CardContent>
        <Typography>
          <del>actualprice:{price}</del>
        </Typography>
        <Typography>Discounted Price: {discountedPrice}</Typography>
      </CardContent>
    </Card>
  );
}

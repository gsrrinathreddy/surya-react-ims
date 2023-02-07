import * as React from "react";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

export default function Address() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Door/Flat Number"
        variant="standard"
      />

      <TextField
        id="standard-basic"
        label="Street Number/Area"
        variant="standard"
      />

      <TextField id="standard-basic" label="City" variant="standard" />
      <br />

      <TextField id="standard-basic" label="District" variant="standard" />

      <TextField id="standard-basic" label="State" variant="standard" />

      <TextField id="standard-basic" label="Pin Code" variant="standard" />
    </Box>
  );
}

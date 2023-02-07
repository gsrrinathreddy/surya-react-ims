import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons(props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={props.text1}
          control={<Radio />}
          label={props.text1}
        />
        <FormControlLabel
          value={props.text2}
          control={<Radio />}
          label={props.text2}
        />
        <FormControlLabel
          value={props.text3}
          control={<Radio />}
          label={props.text3}
        />
      </RadioGroup>
    </FormControl>
  );
}

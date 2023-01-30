import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Basicbutton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">OrderCakes
      </Button>

    </Stack>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
      
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
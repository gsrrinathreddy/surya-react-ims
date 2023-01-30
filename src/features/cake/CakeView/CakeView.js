import * as React from 'react';
import { Button, Snackbar } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import CartComp from '../../../components/cartComp';
import { ordered,restocked } from '../cakeslice'




import Stack from '@mui/material/Stack';


import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CakeView(props){
  let qty=props.qty

    const [open, setOpen] = React.useState(false);
    const dispatch=useDispatch();
    const noOfcakes=useSelector((state)=>state.cake.noOfcakes);
    console.log('no of cakes',noOfcakes);
  
    const handleClick = () => {
        dispatch(ordered())
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
 
   let order=qty
    return(
        <>
        <h3>
            Number of Cakes:
            {(noOfcakes<order)? "out of stock":noOfcakes}
        </h3>
        
        <Button variant="outlined" onClick={handleClick}>
        Order cakes
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          your order is success!
        </Alert>
      </Snackbar>
        <Button onClick={()=>{
            dispatch(restocked(2))
        }}>
            Restock cakes
        </Button>
        </>
    )
}
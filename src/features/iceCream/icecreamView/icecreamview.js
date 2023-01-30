import { Button } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import Sbar from "../../../components/Sbar";
import {ordered,restocked} from '../icecreamSlice'
 
export default function Iceview(){
    const dispatch=useDispatch()
    const noOficecreams=useSelector((state)=>state.ice.noOficecreams)
    console.log("noOficecreams",{noOficecreams})
    const msgbut="Ordered"

return(
    <>
    <h2>
        icecreams:{noOficecreams} 
    </h2>
    <Button onClick={()=>{
        dispatch(ordered(8))
    }}>

        <Sbar msgbut={msgbut} msg1=" your order is placed! "></Sbar>
    </Button>
    <Button onClick={()=>{
        dispatch(restocked(6))
    }}>
       restocking icecreams
    </Button>

    </>
)
}
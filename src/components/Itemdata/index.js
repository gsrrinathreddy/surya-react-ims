 import cake1 from "../../../src/assets/cakes/cake1.jpg";
 import cake2 from "../../../src/assets/cakes/cake2.jpg";
 import cake3 from "../../assets/cakes/cake3.jpg";
 import cake4 from "../../assets/cakes/cake4.jpg";
 import cake5 from "../../assets/cakes/cake5.jpg";
 import cake6 from "../../assets/cakes/cake6.jpg";
 import cake7 from "../../assets/cakes/cake7.jpg";
 import cake8 from "../../assets/cakes/cake8.webp";
 import cake9 from "../../assets/cakes/cake9.jpg";
 import cake10 from "../../assets/cakes/cake10.jpg";
 import cake11 from "../../assets/cakes/cake11.jpg";
 import cake12 from "../../assets/cakes/cake12.jpg";
 import cake13 from "../../assets/cakes/cake13.jpg";
 import cake14 from "../../assets/cakes/cake14.jpg";
 import cake15 from "../../assets/cakes/cake15.jpg";
 import cake16 from "../../assets/cakes/cake16.jpg";
 import cake17 from "../../assets/cakes/cake17.jpg";
 import cake18 from "../../assets/cakes/cake18.jpg";
 import cake19 from "../../assets/cakes/cake19.jpg";
 import cake20 from "../../assets/cakes/cake20.jpg";
import MediaCard from "../Mediacard";
import { Grid } from "@mui/material";

export default function Itemdata(){
    const cakeList=[{cakename:'Vanilla',img:cake1,price:'800',discountedPrice:'600',label:'bestseller',clr:"success"},
    {cakename:'chocolate',img:cake2,price:'900',discountedPrice:'720',label:'bestseller',clr:"success"},
    {cakename:'layeredcake',img:cake3,price:'1100',discountedPrice:'820',label:'premium',clr:"primary"},
     {cakename:'blackforest',img:cake4,title:'chocolate',price:'800',discountedPrice:'720',label:'out of stock',clr:"error"},
     {cakename:'cream and cookie',img:cake5,title:'chocolate',price:'1000',discountedPrice:'820',label:'premium',clr:"primary"},
     {cakename:'pineapple',img:cake6,title:'chocolate',price:'900',discountedPrice:'820',label:'recommended',clr:"secondary"},
     {cakename:'kitkat',img:cake7,title:'chocolate',price:'900',discountedPrice:'790',label:'outofstock',clr:"error"},
     {cakename:'Image',img:cake8,title:'chocolate',price:'900',discountedPrice:'750',label:'premium',clr:"primary"},
     {cakename:'ferrero rocher',img:cake9,title:'chocolate',price:'1100',discountedPrice:'990',label:'bestseller',clr:"success"},
     {cakename:'Blackforest',img:cake10,title:'chocolate',price:'1200',discountedPrice:'1100',label:'recommended',clr:"secondary"},
     {cakename:'panda',img:cake11,title:'chocolate',price:'1350',discountedPrice:'1100',label:'recommended',clr:"secondary"},
     {cakename:'darkchocolate',img:cake12,title:'chocolate',price:'1450',discountedPrice:'1200',label:'only few left',clr:"warning"},
     {cakename:'heartshaped',img:cake13,title:'chocolate',price:'1300',discountedPrice:'1099',label:'onlyfewleft',clr:"warning"},
     {cakename:'brown bear',img:cake14,title:'chocolate',price:'1100',discountedPrice:'900',label:'bestseller',clr:"success"},
     {cakename:'cat',img:cake15,title:'chocolate',price:'1200',discountedPrice:'950',label:'bestseller',clr:"success"},
     {cakename:'cyndrella',img:cake16,title:'chocolate',price:'1000',discountedPrice:'850',label:'premium',clr:"primary"},
     {cakename:'gems&kitkat',img:cake17,title:'chocolate',price:'1300',discountedPrice:'1090',label:'out of stock',clr:"error"},
     {cakename:'white forest',img:cake18,title:'chocolate',price:'1100',discountedPrice:'1000',label:'best seller',clr:"success"},
     {cakename:'milkybar',img:cake19,title:'chocolate',price:'1100',discountedPrice:'990',label:'premium',clr:"primary"},
     {cakename:'redvelvet',img:cake20,title:'chocolate',price:'900',discountedPrice:'800',label:'only few in stock',clr:"warning"},]

     let ordername="cake"
    return(
        <>
        <br/>
        <Grid container rowSpacing={{xs:4,sm:8,md:12}} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'silver'}} >

      
        {
           
            cakeList.map((item,index)=>{
                return(
                    <Grid item={4} key={index}>
                    
                    <MediaCard title={item.cakename}
                                photo={item.img}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                caption={item.label}
                                clr={item.clr}
                                ordername={ordername}
                    ></MediaCard>
                    </Grid>
                )
            })
           
        }
          </Grid>
        </>

    )
}
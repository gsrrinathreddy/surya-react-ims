import choc1 from '../../assets/Chocolates/Almond_surprise_truffle_chocolates.jpg'
import choc2 from '../../assets/Chocolates/Amul_dark_chocolate.jpg'
import choc3 from '../../assets/Chocolates/Basket_of_ferrero_rocher.jpg'
import choc4 from '../../assets/Chocolates/Box_of_assorted_chocolates.jpg'
import MediaCard from '../Mediacard'

import { Grid } from '@mui/material'

export default function ChocData(){
    const choclist=[{chocname:'almond',img:choc1,price:'120',discountedPrice:'100',label:'bestseller',clr:"success"},
    {chocname:'amul',img:choc2,price:'120',discountedPrice:'100',label:'Premium',clr:"secondary"},
    {chocname:'ferrero',img:choc3,price:'120',discountedPrice:'100',label:'pro',clr:"primary"},
    {chocname:'almond',img:choc4,price:'120',discountedPrice:'100',label:'onlyfew left',clr:"warning"},]
    
    let ordername="chocolate"
    return(
        <>
         <Grid container rowSpacing={{xs:4,sm:8,md:12}} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'silver'}} >
        {
            choclist.map((iceitem,index)=>{
                return(
                    <Grid item={4} key={index}>
                        <MediaCard
                                title={iceitem.chocname}
                                photo={iceitem.img}
                                price={iceitem.price}
                                discountedPrice={iceitem.discountedPrice}
                                caption={iceitem.label}
                                clr={iceitem.clr}
                                ordername={ordername}


                        />
                    </Grid>
                )
            })
        }
        </Grid>
        </>
    )

}

import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductsList from "./Products/ProductsList"
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'

const Products = () => {
  return (
    <div className='bg-color h-100'>

        <NavBar />
        <Box height={70} />
            <Box sx={{ display: 'flex' }}>

                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   
                            <ProductsList />
                    
                </Box>
           </Box>
      
    </div>
  )
}

export default Products
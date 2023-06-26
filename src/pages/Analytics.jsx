import React from 'react';

import SideNav from '../components/SideNav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../Dashboard.css"

import { GeoChart } from '../charts/GeoChart';
import { PieChart } from '../charts/PieChart';
import { HorizontalBarCharts } from '../charts/HorizontalBarCharts';

import CountUp from 'react-countup';


const Analytics = () => {
  return (
    <>
    <div className='bg-color'>
    <NavBar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>

        <SideNav />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
              <Stack spacing={2} direction="row">

                <Card sx={{ minWidth: 49 + "%" , height : 140}}  className='gradient'>
                  <CardContent>

                  <Typography gutterBottom variant='h6'   sx={{color: "#fff"}} >
                  Visitors
                            </Typography>

                            
                            <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}} >
                                
                            <CountUp end={25000} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                               Since last week
                            </Typography>
                            



                       
                    </CardContent>
            
                </Card>
                <Card  sx={{ minWidth: 49 + "%" , height : 140}} className='gradienttwo'>
                  
                  <CardContent>
                          <Typography gutterBottom variant='h6'   sx={{color: "#fff"}} >
                          Visitors
                            </Typography>

                            
                            <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}} >
                            <CountUp end={25000} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                               Since last week
                            </Typography>
                            
                            
                  </CardContent>
            
                </Card>
               
              </Stack>
              <Stack spacing={2} direction="row" sx={{
        marginTop: '15px',
      }}>

                <Card sx={{ minWidth: 49 + "%" , height : 140}}  className='gradient'>
                  <CardContent>

                  <Typography gutterBottom variant='h6'   sx={{color: "#fff"}} >
                          Visitors
                            </Typography>

                            
                            <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}} >
                            <CountUp end={25000} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                               Since last week
                            </Typography>
                            


                      
                    </CardContent>

                </Card>
                <Card  sx={{ minWidth: 49 + "%" , height : 140}} className='gradienttwo'>
                  
                  <CardContent>
                  <Typography gutterBottom variant='h6'   sx={{color: "#fff"}} >
                          Visitors
                            </Typography>

                            
                            <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}} >
                            <CountUp end={25000} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                               Since last week
                            </Typography>
                            
                  </CardContent>

                </Card>

                </Stack>
              </Grid>
              <Grid item xs={7}>
               
                  <Card sx={{ Width: "100%" , padding : 1, height: "100%"}} >
                      
              <HorizontalBarCharts />
                  </Card>
                 
            
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                      
                      <CardContent>

                          
                      <GeoChart />
                      
                      </CardContent>
                
                    </Card>
              </Grid>
              <Grid item xs={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                          
                          <CardContent>

                          <PieChart />
                          </CardContent>
                    
                        </Card>
              </Grid>
            </Grid>
       
 
        </Box>
      </Box>
      </div>
    </>
  )
}

export default Analytics
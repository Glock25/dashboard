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
import Accordion from '../components/Accordion';
import { BarChart } from '../charts/BarChart';


import CountUp from 'react-countup';

const Home = () => {
  return (
    <>
    <div className='bg-color'>
    <NavBar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>

        <SideNav />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <Stack spacing={2} direction="row">

                <Card sx={{ minWidth: 49 + "%" , height : 140}}  className='gradient'>
                  <CardContent>

                      <div>
                            <CreditCardIcon sx={{color: "#fff"}} />
                            </div>
                            
                            <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}}>
                                $<CountUp end={550.00} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                                Total Earnings
                            </Typography>
                            



                       
                    </CardContent>
            
                </Card>
                <Card  sx={{ minWidth: 49 + "%" , height : 140}} className='gradienttwo'>
                  
                  <CardContent>
                        <div className='tpicon'>
                        <ShoppingBagIcon  sx={{color: "#fff"}}/>
                        </div>
                        <Typography gutterBottom variant='h5' component="div"  sx={{color: "#fff"}}>
                        $<CountUp end={550.00} duration={2} />
                            </Typography>

                            <Typography gutterBottom variant='body2' component="div"
                            sx={{color: "#fcfcfc"}}>
                                Total Orders
                            </Typography>
                            
                  </CardContent>
            
                </Card>
               
              </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{  padding : "8px 10px 8px 20px", color: "#fcfcfc"}} className='gradienttwo' >
                    
              

                    <Stack spacing={2} direction="row" alignItems="center" >
                        
                        <StorefrontIcon />
                        <div className="rtcontent">
                            <strong className="topprice">$<CountUp end={220.00} duration={2} />k</strong>
                            <span>Total Income</span>
                        </div>

                    </Stack>

     
              
                  </Card>
                  <Card sx={{ padding : "8px 10px 8px 20px"}}>
                    
                  <Stack spacing={2} direction="row" alignItems="center">
                      <StorefrontIcon />
                      <div className="rtcontent">
                          <strong className="topprice">$<CountUp end={220.00} duration={2} />k</strong>
                          <span>Total Income</span>
                      </div>

                    </Stack>
              
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                      
                      <CardContent>

                          
                      <BarChart />
                      
                      </CardContent>
                
                    </Card>
              </Grid>
              <Grid item xs={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                          
                          <CardContent>

                            <Accordion />
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

export default Home
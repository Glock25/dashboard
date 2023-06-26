import {React , useState } from 'react'

import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc

} from "firebase/firestore";

import Swal from "sweetalert2";

import { useAppStore } from '../../appStore';

const AddProduct = ({ closeEvent }) => {

  const [name , setName] = useState('');
const [price , setPrice] = useState('');
const [category , setCategory] = useState('');

const setRows = useAppStore((state) => state.setRows);


// const [rows, setRows] = useState([]);
const empCollectionRef = collection(db, "products");

  const createUser = async () => {
    await addDoc(empCollectionRef, {
        name: name,
        price: Number(price),
        category:category,
        date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted", "Your Product has been Added", "success");
  }

  

console.log("noushad",closeEvent);


  const currencies = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Tablet',
      label: 'Tablet',
    },
    {
      value: 'Computer',
      label: 'Computer',
    },
    {
      value: 'Food',
      label: 'Food',
    },
  ];
  



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };



  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };



  return (
    <>
      <div style={{marginBottom : "15px"}}>
      Add Product
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
              <Box
            component="form"
            sx={{marginBottom : 2}}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Enter Product Name" variant="outlined" size={'small'} 
            sx={{minWidth : "100%"}}      
            onChange={handleNameChange} 
            value={name}

            />
            
          </Box>
          <Box
            component="form"
         
            noValidate
            autoComplete="off"
            sx={{marginBottom : 2}}
          >
            
            <TextField id="outlined-basic1"    
            onChange={handlePriceChange}  
            type='number'
            value={price}
            label="Price" 
            variant="outlined" 
            size={'small'} 
            sx={{minWidth : "100%"}} 

            startAdornment={
            <InputAdornment position="start">
              <CurrencyRupeeIcon />
            </InputAdornment>
          }

            />
            
          </Box>
          <Box sx={{ minWidth: 120, marginBottom : 2 }} >
           
            <TextField
              id="outlined-select-currency"
              select
              sx={{minWidth : "100%"}}        
              size='small'
              label="Category"
            
              defaultValue="EUR"
              onChange={handleCategoryChange}
              helperText="Please select your Product Category"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button variant="contained"
          
           onClick={createUser}

           sx={{width: "100%"}}>
           Submit</Button>
        </Grid>
      </Grid>


    </>
  )
}

export default AddProduct
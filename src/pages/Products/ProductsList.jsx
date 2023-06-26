import {React, useEffect, useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Skeleton from '@mui/material/Skeleton';


import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

 import AddProduct from  "./AddProduct"
 import EditProduct from  "./EditProduct"

import Button from "@mui/material/Button";


import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Swal from "sweetalert2";

import CloseIcon from '@mui/icons-material/Close';

import Modal from '@mui/material/Modal';
import { useAppStore } from '../../appStore';

  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};







function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



export default function ProductList() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);



  const rows = useAppStore((state) => state.rows);
  const setRows = useAppStore((state) => state.setRows);

  const empCollectionRef = collection(db, "products");

  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);

  const [formid, setFormid] = useState('');

  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };


  // const addUsers = async (id) => {
  //   const userDoc = doc(db, "products", id);
  //   await addDoc(userDoc);
  //   getUsers();
  // }


  const editData = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category : category
    };
    setFormid(data);
    handleEditOpen();

  }


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
     <Typography
            gutterBottom
            variant="h5"
            component="div"

            sx={{ padding: "20px", backgroundColor : "#003e9e26" }}
          >
            Products List
          </Typography>

          <Box height={10} />

          <div className='px-2 border-bottom pb-3'>
            <Stack direction="row" spacing={2} className="my-2 mb-2">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                  rows
                }
                sx={{ width: 300 }}
                onChange={(e, v) => filterData(v)}
                getOptionLabel={(rows) => rows.name || ""}
                renderInput={(params) => (
                  <TextField {...params} size="small" label="Search Products" />
                )}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Button variant="contained" 
              // onClick={() => {
              //   addUser();
              // }}
              onClick={handleOpen}
               endIcon={<AddCircleIcon />}
              >
                Add
              </Button>
            </Stack>
          </div>


          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                  
                  <AddProduct closeEvent={handleClose} />
        </Box>
      </Modal>
         
          <Modal
        open={editopen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                  
                  <EditProduct closeEvent={handleEditClose} fid={formid} />
        </Box>
      </Modal>

     

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
              
                  <TableCell
                    // key={column.id}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                  
                    Name
                  </TableCell>
                  <TableCell
                    // key={column.id}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                  
                    Category
                  </TableCell>
                  <TableCell
                    // key={column.id}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                  
                    Date
                  </TableCell>
                  <TableCell
                    // key={column.id}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                  
                    Price
                  </TableCell>
                  <TableCell
                    // key={column.id}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                  
                    Action
                  </TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    
                      
                          <TableCell
                          align={"left"}
                          >
                          {row.name}
                          
                          </TableCell>
                          <TableCell
                          align={"left"}
                          >
                          {row.category}
                        
                          
                          </TableCell>
                          <TableCell
                          align={"left"}
                          >
                            {row.date}
                          
                          
                          </TableCell>
                          <TableCell
                          align={"left"}
                          >
                          {row.price}
                          </TableCell>
                          <TableCell
                          align={"left"}
                          >
                              <Stack spacing={2} direction="row">
                              <EditIcon
                                style={{
                                  fontSize: "20px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                                className="cursor-pointer"
                                onClick={() => 
                                  {
                                    editData(row.id,row.name,row.price,row.category)
                                  }
                                }
                              />
                              <DeleteIcon
                                style={{
                                  fontSize: "20px",
                                  color: "darkred",
                                  cursor: "pointer",
                                }}
                            
                              onClick={() => {
                                  deleteUser(row.id);
                                }}
                              />
                            </Stack>
                          </TableCell>
                        
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    
    </>
  );
}
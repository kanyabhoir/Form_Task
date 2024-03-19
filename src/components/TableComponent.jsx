import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from "@mui/material";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData } from "../../redux/formDataSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TableComponent() {
  
  
  const [open, setOpen] = React.useState(false);
  const [singleData, setSingleData] = React.useState();
  const handleClose = () => setOpen(false);
  
  const dispatch = useDispatch()


const data = useSelector((data) => data.usersData.hobby);

const handleDelete = (i) => {
  console.log(i);
  const deleted = data.filter((data,index) => index !== i)
  dispatch(clearFormData(deleted))
}

const handleOpen = (i) => {
  const update = data.filter((data,index) => index === i);
  setSingleData(update)
  setOpen(true)
};


console.log("userdATA",data);

  return (
    <Grid item xs={6}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Hobby</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.dob}</TableCell>
                <TableCell>{item.hobby.join(", ")}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={() => handleOpen(i)}>Edit</Button>
                    <Button
                    onClick={()=>handleDelete(i)}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditModal style={style} open={open} handleClose={()=>handleClose()} singleData={singleData}/>
    </Grid>
  );
}

export default TableComponent;

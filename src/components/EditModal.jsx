import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { updateFormData } from "../../redux/formDataSlice";
import { useDispatch } from "react-redux";


function EditModal({ open, style, handleClose,  onSave,singleData }) {
    const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleData,
  });
  const handleFormSubmit = (formData) => {
    console.log("formData",formData);
    // dispatch(updateFormData(formData));
    // onSave(formData);
    // reset();
    // handleClose();
  };
  console.log("singleData",singleData);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Details
            </Typography>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <TextField
                name="name"
                label="Name"
                defaultValue={singleData?.[0].name}
                fullWidth
                {...register("name")}
                />
              <TextField
                name="email"
                label="Email"
                defaultValue={singleData?.[0].email}
                fullWidth
                {...register("email")}
                />

              <TextField
                name="dob"
                type="date"
                defaultValue={singleData?.[0].dob}
                fullWidth
                {...register("dob")}
              />

              <Button
                variant="contained"
                color="success"
                type="submit"
                //   onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handleClose();
                }}
                //   onClick={handleSave}
              >
                Cancel
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditModal;

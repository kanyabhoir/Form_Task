import { Grid } from "@mui/material";
import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import { useDispatch } from "react-redux";
import { saveFormData } from "../redux/formDataSlice";

function App() {
  const [userData, setUserData] = useState(null)

  const dispatch = useDispatch();
  const hobbies = [
    "Reading",
    "Gaming",
    "Sports",
    "Cooking",
    "Painting",
    "Travling",
    "Music",
    "Dancing",
  ];
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    hobby: [],
  });
  const [data, setData] = useState([]);

  const handleSave = () => {
    if (validateForm()) {
      setData([...data, formData]);
      setFormData({
        name: "",
        email: "",
        gender: "",
        dob: "",
        hobby: [],
      });
      setErrors({});

      setUserData(formData)
      dispatch(saveFormData(formData));
      
    }

  };
  const handleChnages = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // dispatch(updateFormData({[name]:value}))
  };
  const handleHobbies = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hobby: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newError.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.gender.trim()) {
      newError.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.dob.trim()) {
      newError.dob = "Date of Birth is required";
      isValid = false;
    }

    if (!formData.hobby.length === 0) {
      newError.hobby = "Hobby is required";
      isValid = false;
    }
    setErrors(newError);
    return isValid;
  };



  return (
    <Grid container spacing={2}>
      <FormComponent
        formData={formData}
        errors={errors}
        hobbies={hobbies}
        handleChnages={handleChnages}
        handleHobbies={handleHobbies}
        handleSave={handleSave}
      />
      <TableComponent userData={userData} />
    </Grid>
  );
}

export default App;









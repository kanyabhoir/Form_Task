import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

function FormComponent({formData,errors,hobbies,handleChnages,handleHobbies,handleSave}) {
  return (
    <Grid item xs={6}>
        <form>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChnages}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChnages}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChnages}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="dob"
            // label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={handleChnages}
            error={!!errors.dob}
            helperText={errors.dob}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Hobby</InputLabel>
            <Select
              name="hobby"
              multiple
              value={formData.hobby}
              onChange={handleHobbies}
            >
              {hobbies.map((hobby) => (
                <MenuItem key={hobby} value={hobby}>
                  {hobby}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="success" onClick={() =>handleSave()}>
            Save
          </Button>
        </form>
      </Grid>
  )
}

export default FormComponent
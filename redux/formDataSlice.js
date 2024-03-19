import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hobby: [],
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateFormData(state, action) {
        state.hobby = action.payload;
    },
    saveFormData(state, action) {
      state.hobby = [...state.hobby, action.payload];
    },
    clearFormData(state, action) {
      state.hobby = action.payload;
    },
  },
});


export default formDataSlice.reducer;
export const { saveFormData ,clearFormData,updateFormData} = formDataSlice.actions;

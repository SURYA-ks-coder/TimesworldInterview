import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: "countriesAllData",
  initialState,
  reducers: {
    countriesData: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { countriesData } = countriesSlice.actions;

export default countriesSlice.reducer;

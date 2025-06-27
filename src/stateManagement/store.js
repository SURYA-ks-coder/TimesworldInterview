import { configureStore } from "@reduxjs/toolkit";
import countriesDataGet from "./slice";

export const store = configureStore({
  reducer: {
    countriesAllData: countriesDataGet,
  },
});

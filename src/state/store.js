import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobsSlice";

// const getDataFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("jjobs"));
// };

// const setDataToLocalStorage = (jobs) => {
//   localStorage.setItem("jjobs", JSON.stringify(jobs));
// };

export const store = configureStore({
  reducer: {
    position: jobsReducer,
  },
});

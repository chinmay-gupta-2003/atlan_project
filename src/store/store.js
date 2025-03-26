import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "store/databaseSlice";

const store = configureStore({
  reducer: {
    database: databaseReducer,
  },
});

export default store;

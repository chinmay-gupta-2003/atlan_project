import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableSelected: { id: "", name: "" },
  databaseSelected: { id: "", name: "" },
  viewSelected: "",
  querySelected: "",
  queryHistory: [],
};

const databaseSlice = createSlice({
  name: "database",
  initialState,

  reducers: {
    setTableSelected: (state, action) => {
      state.tableSelected = action.payload;
    },
    setDatabaseSelected: (state, action) => {
      state.databaseSelected = action.payload;
    },
    setViewSelected: (state, action) => {
      state.viewSelected = action.payload;
    },
    setQuerySelected: (state, action) => {
      state.querySelected = action.payload;
    },
    addQueryToHistory: (state, action) => {
      state.queryHistory.unshift(action.payload);
    },
  },
});

export const {
  setTableSelected,
  setDatabaseSelected,
  setViewSelected,
  setQuerySelected,
  addQueryToHistory,
} = databaseSlice.actions;

export default databaseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableSelected: { id: "", name: "" },
  databaseSelected: { id: "", name: "" },
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
  },
});

export const { setTableSelected, setDatabaseSelected } = databaseSlice.actions;

export default databaseSlice.reducer;

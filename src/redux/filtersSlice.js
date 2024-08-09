import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    onFilter(state, action) {
      state.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { onFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

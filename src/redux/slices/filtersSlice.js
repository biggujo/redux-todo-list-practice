import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../constants.js";

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        state.status = action.payload.status;
      },
      prepare(status) {
        return {
          payload: {
            status,
          },
        };
      },
    },
  },
});

export const {
  setStatusFilter,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUpdate: false,
  data: {},
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.isUpdate = action.payload.isUpdate;
      state.data = action.payload.data;
    },
  },
});
export const { updateMode } = updateSlice.actions;
export default updateSlice;

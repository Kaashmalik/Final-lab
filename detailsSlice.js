import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {},
  reducers: {
    setDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;

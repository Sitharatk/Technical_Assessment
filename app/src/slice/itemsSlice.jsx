import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setItems, setError } = itemSlice.actions;

export default itemSlice.reducer;

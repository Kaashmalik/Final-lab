import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    selectedCategory: null,
    categoryDetails: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload;
    },
  },
});

export const { setCategories, selectCategory, setCategoryDetails } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.list;
export const selectSelectedCategory = (state) => state.categories.selectedCategory;
export const selectCategoryDetails = (state) => state.categories.categoryDetails;

export default categoriesSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories, fetchDetails } from './api';
import { setCategories, setDetails } from './slices/categoriesSlice';

export const fetchCategoriesAsync = createAsyncThunk('categories/fetchCategories', async () => {
  const data = await fetchCategories();
  return data;
});

export const fetchDetailsAsync = createAsyncThunk('details/fetchDetails', async (category) => {
  const data = await fetchDetails(category);
  return data;
});


   import { configureStore } from '@reduxjs/toolkit';
   import categoriesReducer, { fetchCategoriesAsync } from './slices/categoriesSlice';
   import detailsReducer, { fetchDetailsAsync } from './slices/detailsSlice';

   const store = configureStore({
     reducer: {
       categories: categoriesReducer,
       details: detailsReducer,
     },
   });

   store.dispatch(fetchCategoriesAsync());

   export default store;

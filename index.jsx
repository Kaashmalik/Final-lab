import { configureStore } from "@reduxjs/toolkit";
import { EmojieSlice, FetchedCategory } from "./Slice/EmojieSlice";


const Store = configureStore({
  reducer: {
    emojies: EmojieSlice.reducer,
    FetchedCategories : FetchedCategory.reducer,
  
  },
});

export default Store;

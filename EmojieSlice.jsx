import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchEmojies = createAsyncThunk("emojies/fetchEmojies", async () => {
  try {
    const res = await fetch("https://emojihub.yurace.pro/api/all");

    if (!res.ok) {
      throw new Error("No Rocket Found...");
    }

    const emojies = await res.json();
    console.log(emojies);


    return emojies;
  } catch (error) {
    console.error("Error fetching emojies:", error);
    throw error; 
  }
});

const EmojieSlice = createSlice({
    name: 'emoji',
    initialState: { emojie: [], status: 'idle', error: null },
    reducers: {
      addEmojie(state, action) {
        if (Array.isArray(action.payload)) {
          state.emojie = action.payload;
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmojies.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchEmojies.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.emojie = action.payload;
        })
        .addCase(fetchEmojies.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch emojies';
        });
    },
  });

  const FetchedCategory = createSlice({
    name: "detailedCategory",
    initialState: { detailedCategory: [], status: 'idle', error: null }, 
    reducers: {
        addfetchedCategory(state, action) {
            if (Array.isArray(action.payload)) {
              state.detailedCategory = action.payload;
              state.status = 'succeeded';
            }
          },
    },
  });
  



//eslint-disable-next-line
export { fetchEmojies };
//eslint-disable-next-line
export const { addEmojie } = EmojieSlice.actions;
//eslint-disable-next-line
export const { addfetchedCategory}= FetchedCategory.actions
//eslint-disable-next-line
export { EmojieSlice,FetchedCategory };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "../loader/loaderSlice";
import { API } from "../../../helpers/api";

const initialState = {
  defaultUrl: API.characters,
  nextPageUrl: "",
  prevPageUrl: "",
  currentPage: 1,
  currentCharacters: [],
  previewCharacters: [],
  loading: false,
};

export const fetchCharactersPage = createAsyncThunk(
  "characters/fetchCharactersPage",
  async (
    { url = API.characters, isPreview = false } = {},
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(showLoader());
      const res = await fetch(url);
      const data = await res.json();
      return { ...data, isPreview };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previewPage: (state) => {
      state.currentPage -= 1;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharactersPage.fulfilled, (state, action) => {
      if (action.payload.isPreview) {
        state.previewCharacters = action.payload.results.slice(0, 4);
      }

      state.currentCharacters = action.payload.results;
      state.nextPageUrl = action?.payload?.next;
      state.prevPageUrl = action?.payload?.previous;
    });

    builder.addCase(fetchCharactersPage.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { nextPage, previewPage, resetPage } = characterSlice.actions;
export default characterSlice.reducer;

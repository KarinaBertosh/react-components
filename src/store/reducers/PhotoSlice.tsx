import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard, ICardForm } from '../../components/types';
import { fetchPhotos, fetchCurrentPhoto, fetchUpdatePagePhotos } from './ActionCreators';
import { IPhoto, photoDefault } from '@/types/common';
import { photos } from 'unsplash-js/dist/internals';

export const initialState = {
  photos: [],
  isLoading: false,
  error: '',
  searchText: ''
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [fetchPhotos.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = '';
      state.photos = action.payload;
    },
    [fetchPhotos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPhotos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    [fetchUpdatePagePhotos.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = '';
      state.photos = action.payload;
    },
    [fetchUpdatePagePhotos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUpdatePagePhotos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    [fetchCurrentPhoto.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.photos = action.payload;
    },
    [fetchCurrentPhoto.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrentPhoto.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const { updateSearchText } = photoSlice.actions;

export default photoSlice.reducer;

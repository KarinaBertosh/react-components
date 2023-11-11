import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard, ICardForm } from '../../components/types';
import { fetchPhotos, fetchCurrentPhoto } from './ActionCreators';
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
    // getCardsInForm(state, action: PayloadAction<ICardForm[]>) {
    //   state.cardsInForm = action.payload;
    // }
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

    // [fetchOneCard.fulfilled.type]: (state, action: PayloadAction<ICard>) => {
    //   state.isLoadingCard = false;
    //   state.errorInCard = '';
    //   state.card = action.payload;
    // },
    // [fetchOneCard.pending.type]: (state) => {
    //   state.isLoadingCard = true;
    // },
    // [fetchOneCard.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoadingCard = true;
    //   state.errorInCard = action.payload;
    // },
  },
});

export const { updateSearchText } = photoSlice.actions;

export default photoSlice.reducer;

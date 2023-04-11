import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../components/types';
import { fetchCards } from './ActionCreators';

interface UserState {
  cards: ICard[];
  isLoading: boolean;
  error: string;
  searchText: string;
  getUsers: ICard[];
}

const initialState: UserState = {
  cards: [],
  isLoading: false,
  error: '',
  searchText: '',
  getUsers: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [fetchCards.fulfilled.type]: (state, action: PayloadAction<ICard[]>) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    [fetchCards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export default cardSlice.reducer;

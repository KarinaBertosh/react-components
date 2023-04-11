import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../components/types';

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
  getUsers: []
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    getUsers(state) {
      state.isLoading = true;
    },
    getUsersIsSuccess(state, action: PayloadAction<ICard[]>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    getUsersIsError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export default cardSlice.reducer;

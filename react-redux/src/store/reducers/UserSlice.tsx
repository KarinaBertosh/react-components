import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { ICard } from '../../components/types';

interface UserState {
  users: ICard[];
  isLoading: boolean;
  error: string;
  searchText: string;
  searchResults: ICard[];
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  searchText: '',
  searchResults: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    updateSearchResults(state, action: PayloadAction<ICard>) {
      state.searchResults = action.payload;
    },
  },
});

export default userSlice.reducer;

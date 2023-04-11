import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  searchText: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  searchText: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default userSlice.reducer;

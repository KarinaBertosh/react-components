import axios from 'axios';
import { AppDispatch } from '../store';
import { cardSlice } from './CardSlice';
import { ICard } from '../../components/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCards = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(cardSlice.actions.getUsers());
//     const response = await axios.get<ICard[]>(
//       'https://rickandmortyapi.com/api/episode'
//     );
//     dispatch(cardSlice.actions.getUsersIsSuccess(response.data.results));
//   } catch (e) {
//     dispatch(cardSlice.actions.getUsersIsError(e.message));
//   }
// };

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICard[]>(
        'https://rickandmortyapi.com/api/episode'
      );
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load cards');
    }
  }
);

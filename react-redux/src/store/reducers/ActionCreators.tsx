import axios from 'axios';
import { AppDispatch } from '../store';
import { cardSlice } from './CardSlice';
import { ICard } from '../../components/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchCurrentCards = createAsyncThunk(
    'cards/fetchCurrent',
    async (valueChange: string, thunkAPI) => {
      try {
        const response = await axios.get<ICard[]>(
          `https://rickandmortyapi.com/api/episode/?name=${valueChange}`
        );        
        return response.data.results;
      } catch (e) {
        return thunkAPI.rejectWithValue('Failed to load cards');
      }
    }
  );


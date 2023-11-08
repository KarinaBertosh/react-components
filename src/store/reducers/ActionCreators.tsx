import axios from 'axios';
import { ICard } from '../../components/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<any>(
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
      const response = await axios.get<any>(
        `https://rickandmortyapi.com/api/episode/?name=${valueChange}`
      );
      return response.data.results;

    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load cards');
    }
  }
);

export const fetchOneCard = createAsyncThunk(
  'cards/fetchOneCard',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<any>(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load card');
    }
  }
);

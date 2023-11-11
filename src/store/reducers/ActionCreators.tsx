import axios from 'axios';
import { ICard } from '../../components/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from "unsplash-js";

export const CLIENT_ID = "k4mKUfSFl2sc60DA18XI5fnXlZw0LwFqSi8W9SATfAc";
export const unsplash = createApi({ accessKey: `${CLIENT_ID}` });

export const fetchPhotos = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      return unsplash.photos.list({ perPage: 30 }).then((result) => {
        return result.response?.results;
      });
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load cards');
    }
  }
);

export const fetchCurrentPhoto = createAsyncThunk(
  'photo/fetchCurrent',
  async (query: string, thunkAPI) => {
    try {
      return unsplash.search.getPhotos({
        query: query,
      }).then((result) => {
        return result?.response?.results;
      });
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load cards');
    }
  }
);

export const fetchUpdatePagePhotos = createAsyncThunk(
  'updatePagePhotos/fetchCurrent',
  async (page: number, thunkAPI) => {
    try {
      return unsplash.photos.list({ page: page, perPage: 30 }).then((result) => {
        return result.response?.results;
      });
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load cards');
    }
  }
);

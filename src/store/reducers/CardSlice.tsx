import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard, ICardForm } from '../../components/types';
import { fetchCards, fetchCurrentCards, fetchOneCard } from './ActionCreators';

export interface UserState {
  cards: ICard[];
  card: ICard;
  isLoading: boolean;
  isLoadingCard: boolean;
  error: string;
  errorInCard: string;
  searchText: string;
  cardsInForm: ICardForm[];
}

const cardDefault = {
  air_date: '',
  characters: [''],
  created: '',
  episode: '',
  id: 1,
  name: '',
  url: '',
};

export const initialState: UserState = {
  cards: [cardDefault],
  card: cardDefault,
  isLoading: false,
  isLoadingCard: false,
  error: '',
  errorInCard: '',
  searchText: '',
  cardsInForm: []
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    getCardsInForm(state, action: PayloadAction<ICardForm[]>) {
      state.cardsInForm = action.payload;
    }
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

    [fetchCurrentCards.fulfilled.type]: (
      state,
      action: PayloadAction<ICard[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    [fetchCurrentCards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrentCards.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    [fetchOneCard.fulfilled.type]: (state, action: PayloadAction<ICard>) => {
      state.isLoadingCard = false;
      state.errorInCard = '';
      state.card = action.payload;
    },
    [fetchOneCard.pending.type]: (state) => {
      state.isLoadingCard = true;
    },
    [fetchOneCard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingCard = true;
      state.errorInCard = action.payload;
    },
  },
});

export const { updateSearchText, getCardsInForm } = cardSlice.actions;

export default cardSlice.reducer;

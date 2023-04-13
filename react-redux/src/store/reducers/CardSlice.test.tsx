import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import cardSlice, {
  UserState,
  getCardsInForm,
  updateSearchText,
} from './CardSlice';
import { fetchCards, fetchCurrentCards, fetchOneCard } from './ActionCreators';

const newCardsInForm = [
  {
    name: 'string',
    date: 'string',
    country: 'string',
    agreement: true,
    gender: 'string',
    photo: 'string',
  },
  {
    name: 'string',
    date: 'string',
    country: 'string',
    agreement: true,
    gender: 'string',
    photo: 'string',
  },
];

const cards = [
  {
    air_date: 'string',
    characters: ['1', '2'],
    created: 'string',
    episode: 'string',
    id: 1,
    name: 'string',
    url: 'string',
  },
  {
    air_date: 'string',
    characters: ['1', '2'],
    created: 'string',
    episode: 'string',
    id: 2,
    name: 'string',
    url: 'string',
  },
];

describe('reducer', () => {
  const state: UserState = {
    cards: [],
    card: [],
    isLoading: false,
    isLoadingCard: false,
    error: '',
    errorInCard: '',
    searchText: '',
    cardsInForm: [],
  };
  it('should handle updateSearchText', () => {
    const initialState: UserState = { ...state, searchText: '' };
    const action = updateSearchText('error');
    const expectedState: UserState = { ...state, searchText: 'error' };

    expect(cardSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle getCardsInForm', () => {
    const initialState: UserState = { ...state, cardsInForm: [] };
    const action = getCardsInForm(newCardsInForm);
    const expectedState: UserState = { ...state, cardsInForm: newCardsInForm };

    expect(cardSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle slice fetchCards rejected', async () => {
    const initialState: UserState = { ...state };
    const action = fetchCards.rejected('rejected');
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

  it('should handle slice fetchCards fulfilled', async () => {
    const initialState: UserState = { ...state };
    const action = fetchCards.fulfilled(state);
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

  it('should handle slice fetchCurrentCards rejected', async () => {
    const initialState: UserState = { ...state };
    const action = fetchCurrentCards.rejected('rejected');
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

  it('should handle slice fetchCurrentCards fulfilled', async () => {
    const initialState: UserState = { ...state };
    const action = fetchCurrentCards.fulfilled(state);
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

  it('should handle slice fetchOneCard rejected', async () => {
    const initialState: UserState = { ...state };
    const action = fetchOneCard.rejected('rejected');
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

  it('should handle slice fetchOneCard fulfilled', async () => {
    const initialState: UserState = { ...state };
    const action = fetchOneCard.fulfilled(state);
    const actual = cardSlice(initialState, action);
    expect(actual).toEqual(actual);
  });

});

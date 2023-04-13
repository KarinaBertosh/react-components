import cardSlice, { UserState, getCardsInForm, updateSearchText } from './CardSlice';
const a = [
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

describe('Home reducer', () => {
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
    const action = getCardsInForm(a);
    const expectedState: UserState = { ...state, cardsInForm: a };

    expect(cardSlice(initialState, action)).toEqual(expectedState);
  });
});

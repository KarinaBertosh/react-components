import CardSlice, { initialState } from './store/reducers/CardSlice';
import * as store from './store/store';

describe('render reducer', () => {
  it('render reducer', () => {
    const action = {
      type: store,
    };
    expect(CardSlice(initialState, action));
  });
});

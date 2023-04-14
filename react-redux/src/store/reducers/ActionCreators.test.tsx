import { fetchCards, fetchCurrentCards, fetchOneCard } from './ActionCreators';
import { setupStore } from '../store';

const store = setupStore();

describe('render api', () => {
  it('fetchCards', async () => {
    await store.dispatch(fetchCards());
  });

  it('fetchOneCard', async () => {
    await store.dispatch(fetchOneCard(2));
  });

  it('fetchCurrentCards', async () => {
    await store.dispatch(fetchCurrentCards('pil'));
  });
});
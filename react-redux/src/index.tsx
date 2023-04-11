import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { HashRouter } from 'react-router-dom';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
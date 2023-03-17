import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import InfoPage from './components/InfoPage/InfoPage';
import MainPage from './components/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "info",
        element: <InfoPage />,
      },
      {
        path: "main",
        element: <MainPage />,
      }
    ],
  }
]
);

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById('root'),
);
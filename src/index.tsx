import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import InfoPage from './components/InfoPage/InfoPage';
import StartPage from './components/StartPage/StartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "main",
    element: <StartPage />,
  },
  {
    path: "info",
    element: <InfoPage />,
  },
]);

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
  document.getElementById('root'),
);
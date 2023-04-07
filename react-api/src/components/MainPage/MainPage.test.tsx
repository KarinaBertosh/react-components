import React from 'react';
import { MainPage } from './MainPage';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// it('render api', async () => {
//   render(
//     <MemoryRouter>
//       <MainPage />
//     </MemoryRouter>
//   );
//   await waitFor(() => {
//     screen.getByText('Dog');
//   });
// });

it('render api', async () => {
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
  await waitFor(() => {
    screen.getByText('Dog');
  });
});

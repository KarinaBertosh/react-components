import axios from 'axios';
import { AppDispatch } from '../store';
import { userSlice } from './CardSlice';
import { ICard } from '../../components/types';

export const fetchCards = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.getUsers());
    const response = await axios.get<ICard[]>(
      'https://rickandmortyapi.com/api/episode'
    );
    dispatch(userSlice.actions.getUsersIsSuccess(response.data.results));
  } catch (e) {
    dispatch(userSlice.actions.getUsersIsError(e.message));
  }
};



// export const getCards = () => {
//     return fetch('https://rickandmortyapi.com/api/episode').then((response) => {
//       if (response.status === 200) return response.json();
//       else throw new Error('Invalid response');
//     });
//   };

//   export const getCurrentCards = (valueChange: string) => {
//     return fetch(
//       `https://rickandmortyapi.com/api/episode/?name=${valueChange}`
//     ).then((response) => {
//       if (response.status === 200) return response.json();
//       else throw new Error('Invalid response');
//     });
//   };

//   export const getOneCard = (id: number) => {
//     return fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(
//       (response) => {
//         if (response.status === 200) return response.json();
//         else throw new Error('Invalid response');
//       }
//     );
//   };
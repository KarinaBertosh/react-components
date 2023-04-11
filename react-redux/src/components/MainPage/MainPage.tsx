import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { getCurrentCards, getOneCard } from '../api';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { cardSlice } from '../../store/reducers/CardSlice';
import { fetchCards, fetchCurrentCards } from '../../store/reducers/ActionCreators';
import './style.scss';

export const MainPage = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.userReducer);
  const { cards, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const { updateSearchText } = cardSlice.actions;
  const dispatch = useAppDispatch();

  const [card, setCard] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const sendId = (idCurrent: number) => {
    setId(idCurrent);
  };

  const setActive = () => {
    setId(0);
    setModal(!modal);
  };

  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  };

  // console.log(cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  useEffect(() => {
    if (id) {
      setModal(true);
      getOneCard(id).then((data) => setCard(data));
    }
  });

  const handleKeyDown = (e: object) => {
    if (e.key === 'Enter') {
      // getCurrentCards(searchText).then((data) => setEpisode(data.results));
      dispatch(fetchCurrentCards(searchText));
    }
  };

  return (
    <>
      <Header />
      <div className="search">
        <input
          type="search"
          className="search__input"
          value={searchText}
          onChange={saveChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isLoading && <h1>Loading ...</h1>}
      {error && <h1>{error}</h1>}
      <>
        <Cards cards={cards} sendId={sendId} />
        <Modal active={modal} setActive={setActive} card={card} />
      </>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { cardSlice } from '../../store/reducers/CardSlice';
import {
  fetchCards,
  fetchCurrentCards,
  fetchOneCard,
} from '../../store/reducers/ActionCreators';
import './style.scss';

export const MainPage = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.userReducer);
  const { cards, card, isLoading, error, isLoadingCard, errorInCard } =
    useAppSelector((state) => state.userReducer);
  const { updateSearchText } = cardSlice.actions;
  const dispatch = useAppDispatch();

  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);

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

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  useEffect(() => {
    if (id) {
      setModal(true);
      dispatch(fetchOneCard(id));
    }
  });

  const handleKeyDown = (e: object) => {
    if (e.key === 'Enter') {
      dispatch(fetchCurrentCards(searchText));
    }
  };
  console.log(error);

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
      {error === '' ? (
        <>
          <Cards cards={cards} sendId={sendId} />
          <Modal
            active={modal}
            setActive={setActive}
            card={card}
            error={errorInCard}
          />
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </>
  );
};

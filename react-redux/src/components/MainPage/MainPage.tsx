import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import {  getCurrentCards, getOneCard } from '../api';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { userSlice } from '../../store/reducers/CardSlice';
import './style.scss';
import { fetchCards } from '../../store/reducers/ActionCreators';

export const MainPage = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.userReducer);
  const { cards } = useAppSelector((state) => state.userReducer);
  const { updateSearchText } = userSlice.actions;
  const dispatch = useAppDispatch();

  const [card, setCard] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    dispatch(fetchCards());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (id) {
      setModal(true);
      setIsLoading(true);
      getOneCard(id).then((data) => setCard(data));
      setIsLoading(false);
    }
  });

  const handleKeyDown = (e: object) => {
    if (e.key === 'Enter') {
      setIsLoading(true);
      getCurrentCards(searchText).then((data) => setEpisode(data.results));
      setIsLoading(false);
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
      {isLoading ? (
        <div className="spinner-border m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <Cards cards={cards} sendId={sendId} />
          <Modal active={modal} setActive={setActive} card={card} />
        </>
      )}
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import './style.scss';
import { getCards, getCurrentCards, getOneCard } from '../api';

export const MainPage = (): JSX.Element => {
  const [episode, setEpisode] = useState([]);
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

  let defaultValue = localStorage.getItem('value');
  if (defaultValue) {
    defaultValue = JSON.parse(defaultValue);
  }
  const [valueChange, setValueChange] = useState(
    defaultValue ? defaultValue : ''
  );
  let value;
  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueChange(e.target.value);
  };

  useEffect(() => {
    value = valueChange;
    return localStorage.setItem('value', JSON.stringify(value));
  }, [valueChange]);

  useEffect(() => {
    setIsLoading(true);
    getCards().then((data) => setEpisode(data.results));
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
      getCurrentCards(valueChange).then((data) => setEpisode(data.results));
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
          value={valueChange}
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
          <Cards cards={episode} sendId={sendId} />
          <Modal active={modal} setActive={setActive} card={card} />
        </>
      )}
    </>
  );
};

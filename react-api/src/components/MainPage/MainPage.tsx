import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import './style.scss';
import { Modal } from '../Modal/Modal';


export const MainPage = (): JSX.Element => {
  const [episode, setEpisode] = useState([]);
  const [card, setCard] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  console.log(id);

  const sendId = (idCurrent: number) => {
    setId(idCurrent);
  };

  let defaultValue = localStorage.getItem('value');
  if (defaultValue) {
    defaultValue = JSON.parse(defaultValue);
  }
  const [valueChange, setValueChange] = useState(defaultValue ? defaultValue : '');
  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueChange(e.target.value);
    localStorage.setItem("value", JSON.stringify(e.target.value));
    getCurrentCards();
  };

  useEffect(() => {
    const getCards = async () => {
      const episodeQuotes = await fetch('https://rickandmortyapi.com/api/episode').then((response) => response.json());
      setEpisode(episodeQuotes.results);
    };
    getCards();
  }, []);

  const getCurrentCards = async () => {
    const episodeQuotes = await axios(`https://rickandmortyapi.com/api/episode/?name=${valueChange}`);
    setEpisode(episodeQuotes.data.results);
  };

  const getOneCard = async () => {
    const episodeQuotes = await axios(`https://rickandmortyapi.com/api/episode/${id}`);
    setCard(episodeQuotes.data);
  };

  useEffect(() => {
    if (id > 0) {
      setModal(true);
      getOneCard();
    }
  });

  console.log('card', card);



  return (
    <>
      <Header />
      <div className='search'>
        <input type="search" className="search__input" value={valueChange} onChange={saveChange} />
      </div>
      <Cards cards={episode} sendId={sendId} />
      <Modal active={modal} setActive={setModal} card={card}/>
    </>
  );
};
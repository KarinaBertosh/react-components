import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import './style.scss';


export const MainPage = (): JSX.Element => {
  const [episode, setEpisode] = useState([]);
  const [id, setId] = useState(16);
  

  const sendId = (id: number) => {
    setId(id);
  };

  let defaultValue = localStorage.getItem('value');
  if (defaultValue) {
    defaultValue = JSON.parse(defaultValue);
  }
  const [valueChange, setValueChange] = useState(defaultValue ? defaultValue : '');
  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueChange(e.target.value);
    localStorage.setItem("value", JSON.stringify(e.target.value));
    fetchSearchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const episodeQuotes = await fetch('https://rickandmortyapi.com/api/episode').then((response) => response.json());
      setEpisode(episodeQuotes.results);
    };
    fetchData();
  }, []);

  const fetchSearchData = async () => {
    const episodeQuotes = await axios(`https://rickandmortyapi.com/api/episode/?name=${valueChange}`);
    console.log(1, episodeQuotes.data.results);
    console.log(2, episodeQuotes);

    setEpisode(episodeQuotes.data.results);
  };

  

  return (
    <>
      <Header />
      <div className='search'>
        <input type="search" className="search__input" value={valueChange} onChange={saveChange} />
      </div>
      <Cards cards={episode} sendId={sendId} />
    </>
  );
}
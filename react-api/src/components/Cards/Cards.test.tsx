import React, { useEffect, useState } from 'react'; 
import { render } from '@testing-library/react';
import { Cards } from './Cards';


describe('render cards', () => {
  it('render cards', async () => {
  const [episode, setEpisode] = useState([]);

    const fetchData = async () => {
      const episodeQuotes = await fetch('https://rickandmortyapi.com/api/episode').then((response) => response.json());
      setEpisode(episodeQuotes.results);
    };
    fetchData();
    render(<Cards cards={episode}/>);
  });
});
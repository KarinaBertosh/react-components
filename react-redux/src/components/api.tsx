export const getCards = () => {
  return fetch('https://rickandmortyapi.com/api/episode').then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error('Invalid response');
  });
};

export const getCurrentCards = (valueChange: string) => {
  return fetch(
    `https://rickandmortyapi.com/api/episode/?name=${valueChange}`
  ).then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error('Invalid response');
  });
};

export const getOneCard = (id: number) => {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(
    (response) => {
      if (response.status === 200) return response.json();
      else throw new Error('Invalid response');
    }
  );
};

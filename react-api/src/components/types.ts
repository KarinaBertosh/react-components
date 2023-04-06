export interface ICard {
  air_date: string,
  characters: Array<string>,
  created: string,
  episode: string,
  id: number,
  name: string,
  url: string,
}

export interface ICardForm {
  name: string,
  date: string,
  country: string,
  agreement: boolean,
  gender: string,
  photo: string,
}

export interface ICardsProps {
  cards: ICardInApi[],
  sendId: (id: number) => void,
}

export interface ICardInApi {
  air_date: string,
  characters: Array<string>,
  created: string,
  episode: string,
  id: number,
  name: string,
  url: string,
}

export interface IModal {
  active: boolean;
  setActive: any;
  card: ICard;
}

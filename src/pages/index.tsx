import { Cards } from "@/components/Cards/Cards";
import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { fetchCards, fetchCurrentCards, fetchOneCard } from "@/store/reducers/ActionCreators";
import { cardSlice } from "@/store/reducers/CardSlice";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Main() {
  const { searchText } = useAppSelector((state: any) => state.userReducer);
  const { cards, card, isLoading, error, errorInCard } =
    useAppSelector((state) => state.userReducer);
  const { updateSearchText } = cardSlice.actions;
  const dispatch = useAppDispatch();

  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);

  const sendId = (idCurrent: number) => {
    setId(idCurrent);
    setModal(true);
    dispatch(fetchOneCard(idCurrent));
  };

  const setActive = () => {
    setId(0);
    console.log(id);
    setModal(!modal);
  };

  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  };

  // useEffect(() => {
  //   dispatch(fetchCards());
  //   dispatch(fetchCurrentCards(searchText));
  // });

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(fetchCurrentCards(searchText));
    }
  };

  return (
    <>
      <Head>
        <title>SSR</title>
      </Head>
      <div className="background">
      <Header />
      <div className="search">
        <input
          role="search"
          type="search"
          className="search__input"
          value={searchText}
          onChange={saveChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* {isLoading && <h1>Loading ...</h1>} */}
      {error === '' ? (
        <>
          <Cards cards={cards} sendId={sendId} />
          {/* <Modal
            active={modal}
            setActive={setActive}
            card={card}
            error={errorInCard}
          /> */}
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
    </>);
}


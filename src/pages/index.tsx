
import { Photos } from "@/components/Photos/Photos";
import { Header } from "@/components/Header/Header";
import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { fetchCurrentPhoto, fetchPhotos } from "@/store/reducers/ActionCreators";
import { photoSlice } from "@/store/reducers/PhotoSlice";
import Head from "next/head";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
  const { searchText, photos } = useAppSelector((state: RootState) => state.photoReducer);
  const { updateSearchText } = photoSlice.actions;
  const dispatch = useAppDispatch();

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement> ) => {
    if (searchText === '') return;
    if (e.key === 'Enter') dispatch(fetchCurrentPhoto(searchText));
  };

  const handleClickButton = (e:  React.MouseEvent<HTMLDivElement> ) => {
    if (searchText === '') return;
    dispatch(fetchCurrentPhoto(searchText));
  };


  return (
    <>
      <Head>
        <title>Stock Photos</title>
      </Head>
      <Header
        searchText={searchText}
        updateValue={updateValue}
        handleKeyDown={handleKeyDown}
        handleClickButton={handleClickButton}
        inputDisabled={false} />
      <Photos photos={photos} />
    </>);
}


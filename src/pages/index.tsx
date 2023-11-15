
import { Photos } from "@/components/Photos/Photos";
import { Header } from "@/components/Header/Header";
import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { fetchCurrentPhoto, fetchPhotos } from "@/store/reducers/ActionCreators";
import { photoSlice } from "@/store/reducers/PhotoSlice";
import Head from "next/head";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
  const [id, setId] = useState<string>('');
  const { searchText } = useAppSelector((state: any) => state.photoReducer);
  const { photos } = useAppSelector((state) => state.photoReducer);
  const { updateSearchText } = photoSlice.actions;
  const dispatch = useAppDispatch();

  // const sendId = (idCurrent: string) => {
  //   setId(idCurrent);
  // };

  const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(fetchCurrentPhoto(searchText));
    }
  };

  return (
    <>
      <Head>
        <title>Stock Photos</title>
      </Head>
      <Header searchText={searchText} saveChange={saveChange} handleKeyDown={handleKeyDown} inputDisabled={false} />
      <Photos photos={photos} />
    </>);
}


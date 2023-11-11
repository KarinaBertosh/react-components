
import { Photos } from "@/components/Photos/Photos";
import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/hook/redux";
import { fetchCurrentPhoto, fetchPhotos } from "@/store/reducers/ActionCreators";
import { photoSlice } from "@/store/reducers/PhotoSlice";
import Head from "next/head";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "@/components/Pagination/Pagination";



export default function Main() {
  const { searchText } = useAppSelector((state: any) => state.photoReducer);
  const { photos, isLoading } =
    useAppSelector((state) => state.photoReducer);
  const { updateSearchText } = photoSlice.actions;
  const dispatch = useAppDispatch();

  const [id, setId] = useState<string>('');

  const sendId = (idCurrent: string) => {
    setId(idCurrent);
  };

  console.log(id);


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
        <title>SSR</title>
      </Head>
      <div className="background">
        <Header searchText={searchText} saveChange={saveChange} handleKeyDown={handleKeyDown} disabled={false} />
        <Photos photos={photos} sendId={sendId} />
        <Pagination/>
      </div>
    </>);
}


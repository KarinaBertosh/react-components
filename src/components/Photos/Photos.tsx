import { IPhoto, IPhotosProps, downloadPhoto, sendPhotoToFavorite } from '@/types/common';
import Image from 'next/image';
import heart from '../../assets/heart.png';
import download from '../../assets/download.png';
import { useAppSelector } from '@/hook/redux';
import { useState } from 'react';
import Photo from '../Photo/Photo';
import Pagination from '../Pagination/Pagination';
import React from "react";


export const Photos = (props: IPhotosProps): JSX.Element => {
  const { photos } = props;
  const { email } = useAppSelector((state: any) => state.userReducer);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [isHidePagination, setIsHidePagination] = useState<boolean>(false);

  const openModal = (url: string) => {
    setCurrentUrl(url);
    setIsOpenModal(true);
    setIsHidePagination(!isHidePagination);
  };
  const setOpenModal = () => {
    setIsOpenModal(!isOpenModal);
    setIsHidePagination(!isHidePagination);
  };

  return (
    <div className="m-t-50">
      {isOpenModal
        ? <Photo url={currentUrl} email={email} setOpenModal={() => setOpenModal()}></Photo>
        : <div className="photos">
          {photos.length
            ? photos.map((photo: IPhoto) => (
              <div key={photo.urls.regular} style={{ position: 'relative' }}>
                <Image className="download" src={download} alt='download-reverse' width={60} onClick={() => downloadPhoto(photo.urls.regular)} />
                <Image className="heart" src={heart} alt='heart' width={50} onClick={() => sendPhotoToFavorite(photo.urls.regular, email)} />
                <Image src={photo.urls.regular} alt={photo.urls.regular} className="photo" width={1000} height={1000} priority={true} onClick={() => openModal(photo.urls.regular)} />
              </div>
            ))
            : 'No matches'
          }
        </div>
      }
      <Pagination isHide={!isHidePagination} />
    </div>);
};


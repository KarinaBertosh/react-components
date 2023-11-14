// "use-client";
import React, { useState } from 'react';
import { IPhoto, IPhotosProps } from '@/types/common';
import Image from 'next/image';
import heart from '../../assets/heart.png';
import { useAppSelector } from '@/hook/redux';


export const Photos = (props: IPhotosProps): JSX.Element => {
  const { photos } = props;
  const { email } = useAppSelector((state: any) => state.userReducer);
  
  const sendPhotoToFavorite = (url: string) => {
    const photos = localStorage.getItem(email) || JSON.stringify([]);
    
    if (photos) {
      const newData = JSON.parse(photos);
      newData.push(url);
      localStorage[email] = JSON.stringify(newData);
    }
  };

  return (
    <div className="photos">
      {photos.map((photo: IPhoto) => (
        <div key={photo.urls.regular} style={{ position: 'relative' }}>
          <Image className="heart" src={heart} alt='heart' width={50} onClick={() => sendPhotoToFavorite(photo.urls.regular)} />
          <Image src={photo.urls.regular} alt={photo.urls.regular} className="photo" width={1000} height={1000} priority={true} />
        </div>
      ))}
    </div>);
};


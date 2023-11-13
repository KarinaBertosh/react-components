import React from 'react';
import { IPhotosProps } from '../types';
import { IPhoto } from '@/types/common';
import Image from 'next/image';
import plus from '../../assets/plus.svg';


export const Photos = (props: IPhotosProps): JSX.Element => {
  const { photos, sendId } = props;

  const clickHandler = (id: string) => {
    sendId(id);
  };


  return (
    <div className="photos">
      {photos.map((photo: IPhoto) => (
        <div key={photo.urls.regular} style={{ position: 'relative' }}>
          {true
            ? <Image className="plus" src={plus} alt='plus' onClick={() => clickHandler(photo.id)} width={50} />
            : <div></div>
          }
          <Image src={photo.urls.regular} alt={photo.urls.regular} className="photo" width={1000} height={1000} priority={true} />
        </div>
      ))}
    </div>);
}


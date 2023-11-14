import React from 'react';
import { IPhoto, IPhotosProps } from '@/types/common';
import Image from 'next/image';
import heart from '../../assets/heart.png';


export const Photos = (props: IPhotosProps): JSX.Element => {
  const { photos } = props;

  return (
    <div className="photos">
      {photos.map((photo: IPhoto) => (
        <div key={photo.urls.regular} style={{ position: 'relative' }}>
          <Image className="heart" src={heart} alt='heart' width={50} />
          <Image src={photo.urls.regular} alt={photo.urls.regular} className="photo" width={1000} height={1000} priority={true} />
        </div>
      ))}
    </div>);
}


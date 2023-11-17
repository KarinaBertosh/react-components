import Image from 'next/image';
import backArrow from '../../assets/backArrow.png';
import heart from '../../assets/heart.png';
import download from '../../assets/download.png';
import { downloadPhoto, sendPhotoToFavorite } from '@/types/common';
import 'bootstrap/dist/css/bootstrap.css';

interface IPhotoField {
  url: string;
  email: string;
  setOpenModal: () => void;
}


export default function Photo(props: IPhotoField) {
  const { url, email, setOpenModal } = props;
  return (
    <div className="photo-page">
      <div className="photo-page__navbar">
        <button className="" onClick={() => downloadPhoto(url)}>Dowland photo</button>
        <button className="" onClick={() => sendPhotoToFavorite(url, email)}>Add photo to favorite</button>
      </div>
      <div className="photo-page__photo-field m-t-20">
        <Image src={backArrow} alt="backArrow" width={35} height={35} onClick={setOpenModal} className="m-r-10 backArrow"></Image>
        <Image src={url} alt={url} width={0} height={0} sizes="100vw" style={{ width: '50%', height: '50%' }}></Image>
      </div>
    </div>
  );
}

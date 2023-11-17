import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import backArrow from '../../assets/backArrow.png';
import heart from '../../assets/heart.png';
import download from '../../assets/download.png';
import { downloadPhoto, sendPhotoToFavorite } from '@/types/common';

export default function Photo(props: { url: string; email: string; setOpenModal: () => void; }) {
  const { url, email, setOpenModal } = props;
  return (
    <div className="photo-page">
      <div className="photo-page__navbar">
        <Image className="icon" src={download} alt='download' width={60} onClick={() => downloadPhoto(url)} />
        <Image className="icon" src={heart} alt='heart' width={50} onClick={() => sendPhotoToFavorite(url, email)} />
      </div>
      <div className="photo-page__photo-field m-t-20">
        <Image src={backArrow} alt="backArrow" width={35} height={35} onClick={setOpenModal} className="m-r-10 backArrow"></Image>
        <Image src={url} alt={url} width={0} height={0} sizes="100vw" style={{ width: '50%', height: '50%' }}></Image>
      </div>
    </div>
  );
}

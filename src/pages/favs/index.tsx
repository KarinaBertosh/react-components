import { useAppSelector } from '@/hook/redux';
import { Header } from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import cross from '../../assets/cross.png';
import { RootState } from '@/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FavsPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const { email } = useAppSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    const photos = localStorage.getItem(email) ;
    if (photos) {
      const parsedData = JSON.parse(photos);
      setPhotos(parsedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remotePhoto = (url: string) => {
    const photos = localStorage.getItem(email);
    if (photos) {
      const parsedData = JSON.parse(photos);
      const updatedPhoto = parsedData.filter((photo: string) => photo !== url)
      localStorage[email] = JSON.stringify(updatedPhoto);
      setPhotos(updatedPhoto)
    }
  };

  return (
    <>
      <Header inputDisabled={true} />
      <div className="photos m-t-50">
        {photos.map((url: string) => (
          <div key={url} style={{ position: 'relative' }}>
            <Image className="heart" src={cross} alt='heart' width={50} height={50} onClick={() => remotePhoto(url)} />
            <Image src={url} alt={url} width={400} height={400} priority={true} className='photo' />
          </div>
        ))}
      </div>
    </>
  );
};


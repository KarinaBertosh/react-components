import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import cross from '../../assets/cross.png';


export default function Photo(props: { url: string; setOpenModal: () => void; }) {
  const { url, setOpenModal } = props;
  return (
    <div className="photo-page">
      <Image src={cross} alt="cross" width={35} height={35} onClick={setOpenModal} className="m-r-10 cross"></Image>
      <Image src={url} alt={url} width={0} height={0} sizes="100vw" style={{ width: '50%', height: '50%' }}></Image>
    </div>
  );
}

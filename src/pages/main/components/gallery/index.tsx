import { FC } from 'react';
import GalleryCards from '../gallery-cards';
import Sidebar from '../sidebar';
import cl from './styles.module.scss';

export const Gallery: FC = () => {
  return (
    <section className='container'>
      <div className={cl.wrapper}>
        <GalleryCards />
        <Sidebar />
      </div>
    </section>
  );
};

export default Gallery;

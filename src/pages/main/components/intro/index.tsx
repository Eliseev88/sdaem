import { FC } from 'react';
import cl from './styles.module.scss';

export const Intro: FC = () => {
  return (
    <section className='container'>
      <div className={cl.intro}>
        <h1 className={cl.title}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
      </div>
    </section>
  );
};

export default Intro;

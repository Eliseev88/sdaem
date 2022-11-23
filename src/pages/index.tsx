import { Routes, Route } from 'react-router';
import { FC, lazy } from 'react';
import Header from 'widgets/header';

const MainPage = lazy(async () => await import('./main'));

export const Routing: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<div>test</div>} />
      </Routes>
    </>
  );
};

export default Routing;

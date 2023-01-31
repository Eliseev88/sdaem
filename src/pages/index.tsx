import { Routes, Route } from 'react-router';
import { FC, lazy, useEffect, useState } from 'react';
import Header from 'widgets/header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'entities/user/model/firebase';
import PublicRoute from './PublicRoute';
import { useAppDispatch } from 'shared/hooks';
import { userSlice } from 'entities/user/model';
import CatalogPage from './catalog';

const MainPage = lazy(async () => await import('./main'));

export const Routing: FC = () => {
  const [authed, setAuthed] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  // Check if user signin or signup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
        dispatch(userSlice.actions.userFetchingSuccess(user));
      } else {
        setAuthed(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Header authed={authed} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<PublicRoute authed={authed} />}>
          <Route path='' element={<MainPage />} />
        </Route>
        <Route path="/signin" element={<PublicRoute authed={authed} />}>
          <Route path='' element={<MainPage />} />
        </Route>
        <Route path="/recovery" element={<PublicRoute authed={authed} />}>
          <Route path='' element={<MainPage />} />
        </Route>
        <Route path='/catalog' element={<CatalogPage />} />
      </Routes>
    </>
  );
};

export default Routing;

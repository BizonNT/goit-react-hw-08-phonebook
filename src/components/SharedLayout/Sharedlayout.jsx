import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import Loader from '../../components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Navigation/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout/Sharedlayout';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const AddContactPage = lazy(() =>
  import('pages/AddContactPage/AddContactPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')); 

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="add" element={<AddContactPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

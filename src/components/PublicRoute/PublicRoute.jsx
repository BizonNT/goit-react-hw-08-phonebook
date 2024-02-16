import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';

import Loader from '../Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;

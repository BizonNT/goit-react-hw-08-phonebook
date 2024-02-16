import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../redux/auth/auth-operations';
import AppRoutes from './AppRoutes';

import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppRoutes />
    </div>
  );
};
export default App;

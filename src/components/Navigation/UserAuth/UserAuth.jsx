import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Button/Button';
import Message from '../../Message/Message';
import { resetError } from '../../../redux/auth/auth-slice';
import { selectError } from '../../../redux/auth/auth-selectors';

import css from './user-auth.module.css';

const UserAuth = () => {
  const isError = useSelector(selectError);
  let authError = isError;
  const dispatch = useDispatch();

  const handleResetError = () => {
    authError = null;
      dispatch(resetError());
  };

  return (
    <div className={css.container}>
      <NavLink to="/register">
        <Button
          onClick={handleResetError}
          title="Registration"
          type="submit"
          menu
        />
      </NavLink>
      <NavLink to="/login">
        <Button onClick={handleResetError} title="Login" type="submit" menu />
      </NavLink>
      {authError && (
        <Message message={isError} red text=". Please, Try again..." />
      )}
    </div>
  );
};

export default UserAuth;

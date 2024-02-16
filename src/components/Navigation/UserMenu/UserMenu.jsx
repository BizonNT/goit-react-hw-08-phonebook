import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Button/Button';

import { logout } from '../../../redux/auth/auth-operations';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';

import css from './user-menu.module.css';

const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    return dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.user}>{name}</p>
      <NavLink to="/">
        <Button onClick={onLogout} title="Logout" type="submit" menu/>
      </NavLink>
    </div>
  );
};

export default UserMenu;

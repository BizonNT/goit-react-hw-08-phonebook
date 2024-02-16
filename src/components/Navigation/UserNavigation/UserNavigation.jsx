import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import userMenuItems from './UserMenuItems';

import css from './user-navigation.module.css';

const UserNavigation = () => {
  const isLogin = useSelector(selectIsLogin);
  const filteredMenuItems = !isLogin
    ? userMenuItems.filter(item => !item.private)
    : userMenuItems;

  const elements = filteredMenuItems.map(({ id, to, title }) => (
    <li key={id} className={css.item}>
      <NavLink to={to} className={css.link}>
        {title}
      </NavLink>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default UserNavigation;

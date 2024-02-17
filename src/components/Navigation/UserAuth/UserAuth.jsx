import { NavLink } from 'react-router-dom';

import Button from 'components/Button/Button';

import css from './user-auth.module.css';

const UserAuth = () => {

  return (
    <div className={css.container}>
      <NavLink to="/register">
        <Button title="Registration" type="submit" menu />
      </NavLink>
      <NavLink to="/login">
        <Button title="Login" type="submit" menu />
      </NavLink>
    </div>
  );
};

export default UserAuth;

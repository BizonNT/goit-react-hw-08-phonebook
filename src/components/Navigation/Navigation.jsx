import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserNavigation from './UserNavigation/UserNavigation';
import UserAuth from './UserAuth/UserAuth';
import UserMenu from './UserMenu/UserMenu';

import { selectIsLogin } from '../../redux/auth/auth-selectors';

import css from './navigation.module.css';

const Navigation = () => {
  const IsLogin = useSelector(selectIsLogin);

  return (
    <div className={css.block}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>
          PhoneBOOK
        </Link>
        <UserNavigation />
        {IsLogin ? <UserMenu /> : <UserAuth />}
      </div>
    </div>
  );
};

export default Navigation;

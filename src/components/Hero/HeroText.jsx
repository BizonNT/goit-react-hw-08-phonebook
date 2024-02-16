import { useSelector } from 'react-redux';

import css from './hero.module.css';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const HeroText = () => {
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return (
      <p className={css.text}>
        This phonebook aplication for keep your contacts with phone numbers.
        Page <b>Contacts</b> shows contacts which was added to base before. New
        contact can be added to base on the page <b>Add Contact</b>. We hope
        using this application bring to you relax and sutisfaction.
        <br />
        <br />
        Best Regards!
      </p>
    );
  }
  return (
    <p className={css.text}>
      Use this phonebook aplication for keep your contacts with phone numbers.
      For this activity Please do <b>Registration</b> new account or if you
      already have one, Please <b>Login</b>
    </p>
  );
};

export default HeroText;

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from 'components/Loader/Loader';

import { login } from '../../redux/auth/auth-operations';
import { selectIsLoading } from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSighIn = body => {
    dispatch(login(body));
  };

  return (
    <>
      {authLoading && <Loader />}
      {!authLoading && <LoginForm onSubmit={handleSighIn} />}
    </>
  );
};
export default LoginPage;

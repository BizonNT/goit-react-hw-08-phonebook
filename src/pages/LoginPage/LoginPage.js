import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from 'components/Loader/Loader';

import { login } from '../../redux/auth/auth-operations';
import {
  selectError,
  selectIsLoading,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectIsLoading);
  const authError = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSighIn = body => {
    dispatch(login(body));
  };

  return (
    <>
      {authLoading && <Loader />}
      {!authLoading && <LoginForm onSubmit={handleSighIn} />}
      {authError && <div>{authError} </div>}
    </>
  );
};
export default LoginPage;

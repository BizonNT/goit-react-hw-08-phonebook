import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/Message';

import { login } from '../../redux/auth/auth-operations';
import { selectError, selectIsLoading } from '../../redux/auth/auth-selectors';

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
      {authError && (
        <Message message={authError} red text=". Please, Try again..." />
      )}
      {!authLoading && <LoginForm onSubmit={handleSighIn} />}
    </>
  );
};
export default LoginPage;

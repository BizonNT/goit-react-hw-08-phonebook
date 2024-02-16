import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';

import { signup } from '../../redux/auth/auth-operations';
import {
  selectError,
  selectIsLoading,
} from '../../redux/auth/auth-selectors';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const authLoading = useSelector(selectIsLoading);
  const authError = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSighUp = body => {
    dispatch(signup(body));
  };

  return (
    <>
      {authLoading && <Loader />}
      {!authLoading && <RegisterForm onSubmit={handleSighUp} />}
      {authError && <div>{authError} </div>}
    </>
  );
};
export default RegisterPage;

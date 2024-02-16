import { useState, useId } from 'react';

import Button from '../Button/Button';

import css from './register-form.module.css';

const RegisterForm = ({onSubmit}) => {
  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleInput = event => {
    const { name, value } = event.target;

    const newValue = value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <div className={css.container}>
      <h2 className={css.title}>New User Registration form</h2>
      <form className={css.info} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameId}>
          Name
          <input
            value={name}
            onChange={handleInput}
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            required
          />
        </label>
        <label className={css.label} htmlFor={emailId}>
          E-mail
          <input
            value={email}
            onChange={handleInput}
            className={css.field}
            type="email"
            name="email"
            id={emailId}
            required
          />
        </label>
        <label className={css.label} htmlFor={passwordId}>
          Password
          <input
            value={password}
            onChange={handleInput}
            className={css.field}
            type="password"
            name="password"
            id={passwordId}
            required
          />
        </label>
        <Button type="submit" title="Register now" />
        
      </form>
    </div>
  );
};

export default RegisterForm;

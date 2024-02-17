import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeContact } from '../../redux/contacts/contacts-operations';
import Button from '../Button/Button';

import css from './change-contact-form.module.css';

const ChangeContactForm = ({ contact }) => {
  const [name, setName] = useState(contact[0].name);
  const [number, setNumber] = useState(contact[0].number);
  const { id } = contact[0];

  const dispatch = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleChangeName = event => {
    event.preventDefault();
    const data = { id, name, number };
    dispatch(changeContact(data));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Change Contact</h2>
      <form className={css.info} onSubmit={handleChangeName}>
        <label className={css.label}>
          Name
          <input
            className={css.field}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleInput}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.field}
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleInput}
          />
        </label>
        <Button title="Change contact" type="submit" />
      </form>
    </div>
  );
};

export default ChangeContactForm;

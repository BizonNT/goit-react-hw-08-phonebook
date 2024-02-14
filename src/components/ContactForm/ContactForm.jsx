import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
} from '../../redux/contacts/contacts-operations';

import css from './contactform.module.css';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleAddName = event => {
    event.preventDefault();

    const data = {
      name,
      phone,
    };
     dispatch(addContact(data));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.info} onSubmit={handleAddName}>
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
        Phone
        <input
          className={css.field}
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={handleInput}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

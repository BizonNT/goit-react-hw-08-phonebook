import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addContact,
} from '../../redux/contacts/contacts-operations';

import css from './contactform.module.css';
import Button from '../Button/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleAddName = event => {
    event.preventDefault();

    const data = {
      name,
      number,
    };
    dispatch(addContact(data));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Add Contact</h2>
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
        <Button title="Add contact" type="submit"/>
          
      </form>
    </div>
  );
}

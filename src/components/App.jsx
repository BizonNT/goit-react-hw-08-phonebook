import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactList/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import Loader from './Loader/Loader';

import { selectAllNames } from '../redux/contacts/contacts-selectors';

import css from './app.module.css';

export default function App() {
  const { items, isLoading, error } = useSelector(selectAllNames);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h3 className={css.subtitle}>Contacts</h3>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {!isLoading &&
        (items.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There is no contacts in the Phonebook" />
        ))}
    </div>
  );
}

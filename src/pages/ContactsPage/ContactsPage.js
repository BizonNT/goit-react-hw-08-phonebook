import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { selectAllNames } from '../../redux/contacts/contacts-selectors';

const ContactsPage = () => {
  const { items, isLoading, error } = useSelector(selectAllNames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {!isLoading &&
        (items.length ? (
          <ContactList />
        ) : (
          <Notification message="There is no contacts in the Phonebook" />
        ))}
    </>
  );
};
export default ContactsPage;

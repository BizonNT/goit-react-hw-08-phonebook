import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import Filter from './Filter';
import Modal from '../Modal/Modal';

import css from './contactlist.module.css';
import Button from '../Button/Button';

const ContactList = () => {
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState([]);

  const items = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const deleteContactName = event => {
    const contactId = event.currentTarget.closest('li').id;
    dispatch(deleteContact(contactId));
  };

  const toggleModal = useCallback(() => {
    setShowModal(showModal => !showModal);
  }, []);

  const onHandleClick = useCallback(
    event => {
      const contactId = event.currentTarget.closest('li').id;
      const contact = items.filter(item => item.id === contactId);
      setContact(contact);
      toggleModal();
    },
    [items, toggleModal]
  );

  const elements = items.map(({ name, number, id }) => (
    <li className={css.item} key={id} id={id}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <Button onClick={onHandleClick} menu title="Change" type="button" />
      <Button onClick={deleteContactName} menu title="Delete" type="button" />
    </li>
  ));

  return (
    <div className={css.container}>
      <h3 className={css.title}>Contacts</h3>
      <Filter />
      <ul className={css.list}>{elements}</ul>
      {showModal && <Modal onClose={toggleModal} contact={contact} />}
    </div>
  );
};

export default ContactList;

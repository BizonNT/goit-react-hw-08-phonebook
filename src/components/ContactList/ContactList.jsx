import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import Filter from './Filter';

import css from './contactlist.module.css';
import Button from '../Button/Button';

const ContactList = () => {
  const  items  = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const deleteContactName = event => {
    const contactId = event.currentTarget.closest('li').id;
    dispatch(deleteContact(contactId));
  };

  const elements = items.map(({ name, number, id }) => (
    <li className={css.item} key={id} id={id}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <Button onClick={deleteContactName} title="Delete" type="button"/>
    </li>
  ));

  return (
    <div className={css.container}>
      <h3 className={css.title}>Contacts</h3>
      <Filter />
      <ul className={css.list}>{elements}</ul>;
    </div>

  )
};

export default ContactList;

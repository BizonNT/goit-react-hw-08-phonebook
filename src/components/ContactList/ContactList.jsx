import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import css from './contactlist.module.css';

const ContactList = () => {
  const  items  = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const deleteContactName = event => {
    const contactId = event.currentTarget.closest('li').id;
    dispatch(deleteContact(contactId));
  };

  const elements = items.map(({ name, phone, id }) => (
    <li className={css.item} key={id} id={id}>
      <p className={css.text}>
        {name}: {phone}
      </p>
      <button onClick={deleteContactName} type="button" className={css.btn}>
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactList;

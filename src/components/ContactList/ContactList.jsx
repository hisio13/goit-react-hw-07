import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
  selectError
} from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            {name}: {number}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

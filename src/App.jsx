import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from './redux/contactsOps';
import { changeFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={newContact => dispatch(addContact(newContact))} />
      <SearchBox filter={filter} onFilter={value => dispatch(changeFilter(value))} />
      <ContactList 
        contacts={filteredContacts} 
        onDelete={id => dispatch(deleteContact(id))} 
      />
    </div>
  );
}

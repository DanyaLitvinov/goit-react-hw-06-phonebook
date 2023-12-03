import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact, updateFilter } from './contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './Container/Container.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const addContactHandler = (name, number) => {
    const isNameExist = contacts.some(contact => contact.name === name);

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const filterChangeHandler = value => {
    dispatch(updateFilter(value));
  };

  const deleteContactHandler = id => {
    dispatch(removeContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter onChange={filterChangeHandler} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContactHandler} />
    </Container>
  );
};

export default App;

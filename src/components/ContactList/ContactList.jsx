import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { removeContact } from '../contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const deleteContactHandler = id => {
    dispatch(removeContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => deleteContactHandler(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/Contacts/ConactsSlice';
import { getFilter } from '../../redux/Filters/FilterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters?.toLowerCase())
    );
  };

  return (
    <List>
      {getVisibleContacts().map((contact) => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() =>  dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  )
}

export default ContactList;
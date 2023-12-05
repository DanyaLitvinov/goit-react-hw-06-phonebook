import React, { useState } from 'react';
import { Button, Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, setContact } from '../../redux/Contacts/ConactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContactTemplate = {
      name: formData.name,
      number: formData.number,
      id: nanoid(),
    };

    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isInContacts) {
      return alert(`${formData.name} is already in contacts`);
    }

    dispatch(setContact(newContactTemplate));

    setFormData({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number:
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
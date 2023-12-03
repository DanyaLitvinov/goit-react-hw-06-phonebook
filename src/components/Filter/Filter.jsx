import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { updateFilter } from '../contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};

export default Filter;

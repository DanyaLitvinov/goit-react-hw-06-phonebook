import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../redux/Filters/FilterSlice';

const Filter = () => {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };


  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default Filter;
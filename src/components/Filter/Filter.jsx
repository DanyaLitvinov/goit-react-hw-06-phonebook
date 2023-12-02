import React, { useState } from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    onChange(value);
  };

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </Label>
  );
};

export default Filter;

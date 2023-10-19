import React from 'react';
import { StyledDesc } from '../styles/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { StyledContacts } from './ContactsList/ContactsList.styled';
import { StyledFilter, StyledInput } from './Filter/Filter.styled';

const FilterData = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <StyledFilter>
      <StyledDesc>Find contacts by name!!!</StyledDesc>
      <StyledInput
        type="text"
        name="search"
        onChange={e => dispatch(updateFilter(e.target.value))}
        value={filter}
        placeholder="Search by name"
      />
    </StyledFilter>
  );
};
export default FilterData;


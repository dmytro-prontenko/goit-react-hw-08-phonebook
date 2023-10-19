import { useState } from 'react';
import { StyledDesc } from '../../styles/App.styled';
import {
  StyledButton,
  StyledContactTitle,
  StyledForm,
  StyledInput,
  StyledWrapper
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const findByName = contacts.find(contact => contact.name === name);
    if (!findByName) {
      dispatch(addContactThunk({ name, number }));
    } else alert(`${findByName.name} is already in contacts`);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContactTitle>Enter contact data</StyledContactTitle>
      <StyledWrapper>
        <StyledDesc>Name</StyledDesc>
        <StyledInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
      </StyledWrapper>
      <StyledWrapper>
        <StyledDesc>Phone number</StyledDesc>
        <StyledInput
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="XXX-XXX-XXXX"
        />
      </StyledWrapper>

      <StyledButton type="submit">Add Contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;

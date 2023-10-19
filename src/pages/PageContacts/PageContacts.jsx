import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

import FilterData from 'components/FilterData';
import React from 'react';
import { StyledBlurWrapper } from './PageContacts.styled';

const PageContacts = () => {
  return (
    <>
    <StyledBlurWrapper/>
      <ContactForm />
      <FilterData />
      <ContactsList />
    </>
  );
};

export default PageContacts;
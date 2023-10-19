import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

import FilterData from 'components/FilterData';
import React from 'react';

const PageContacts = () => {
  return (
    <>
      <ContactForm />
      <FilterData />
      <ContactsList />
    </>
  );
};

export default PageContacts;
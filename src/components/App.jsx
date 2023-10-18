import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  changeFilter,
  contactAdd,
  contactDelete,
  fetchContacts,
} from 'redux/phoneBookReducer';
import { getContacts, getFilter } from 'redux/selectors';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChangeInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  const handleAddContact = ({ name, number }) => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (name && number) {
      if (!contactExists) {
        dispatch(contactAdd({ id: nanoid(), name, number }));
        toast.success(`${name} was added to contacts`);
      } else {
        toast.error(`${name} is already exist in contacts`);
      }
    }
  };

  const handleDeleteContact = id => {
    dispatch(contactDelete(id));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filteredContacts();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HOME</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contacts" element={<h1>contact list</h1>}></Route>
      </Routes>

      {/* <div className="wrapper">
      {/* <div className="wrapper">
        <h1>Phonebook</h1>
        <Form addContact={handleAddContact} />
        {contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter onFilterChange={handleChangeInput} filterValue={filter} />
            <ContactsList
              contacts={filteredData}
              filterValue={filter}
              deleteContact={handleDeleteContact}
            />
          </>
        ) : (
          'There are no contacts'
        )}
      </div> */}
    </>
  );
};

export default App;

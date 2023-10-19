import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selectors';
import remove from '../../images/remove-svgrepo-com.svg';
import { StyledTitle } from '../../styles/App.styled';
import { Loader } from '../Loader/Loader';
import {
  StyledBtnDelete,
  StyledContactLi,
  StyledContacts,
  StyledContactsList,
  StyledSpan
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();
  return (
    <StyledContacts>
      <StyledTitle>Your contacts</StyledTitle>
      {contacts.length 
      ? <StyledContactsList>
        {loading && <Loader />}
        {error && <StyledTitle>Something went wrong</StyledTitle>}
        {filteredData.map(contact => (
          <StyledContactLi key={contact.id}>
            <StyledSpan>
              {contact.name}: <span>{contact.number}</span>
            </StyledSpan>
            <StyledBtnDelete
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              <img src={remove} alt='remove'/>
            </StyledBtnDelete>
          </StyledContactLi>
        ))}
      </StyledContactsList> : <p>There are no contacts</p>}
    </StyledContacts>
  );
};
export default ContactsList
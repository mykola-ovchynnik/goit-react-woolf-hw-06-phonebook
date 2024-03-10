import { deleteContact } from 'store/contactsReducer/contactsSlice.js';
import { ContactItem, DeleteButton, List } from './ContactList.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'store/selectors.js';

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
    </List>
  );
};

export default ContactList;

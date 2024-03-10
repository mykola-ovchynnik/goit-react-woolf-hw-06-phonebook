import {
  ContactsHeader,
  Phonebook,
  PhonebookHeader,
} from './Phonebook/Phonebook.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <Phonebook>
      <PhonebookHeader>Phonebook</PhonebookHeader>
      <ContactForm />

      <ContactsHeader>Contacts</ContactsHeader>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};

export default App;

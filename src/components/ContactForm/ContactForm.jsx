import { Form, Button, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { isExist } from 'helpers/helpers';
import { addContact } from 'store/contactsReducer/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { contactsSelector } from 'store/selectors';

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;

    if (isExist(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number: e.target.elements.number.value,
      })
    );

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="text"
          name="number"
          id="tel"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;

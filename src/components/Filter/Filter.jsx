import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filterReducer/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(setFilter(filterValue));
  };

  return (
    <Input
      type="text"
      placeholder="Search contacts by name..."
      onChange={handleChange}
    />
  );
};

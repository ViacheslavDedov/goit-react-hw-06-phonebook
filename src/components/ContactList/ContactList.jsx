import React from 'react';
import { useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

const filterContacts = (items, value) => {
return items.filter(contact =>
  contact.name.toLowerCase().includes(value.toLowerCase())
);
};

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);
  const contacts = filterContacts(items, value);

return (
  <ul className={css.contacts}>
    { contacts.length
       ? (
            contacts.map(({id, name, number}) =>  (
      
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
      />
          ))
        )
       : (<p className={css.contacts__message}>Your phonebook is empty !!!</p>)
      }
  </ul>)
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDelContact: PropTypes.func.isRequired,
// }

export default ContactList;
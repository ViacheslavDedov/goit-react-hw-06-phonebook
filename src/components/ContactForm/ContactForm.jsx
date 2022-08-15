import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { actions } from 'redux/actions';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    
const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
        case 'name':
            setName(value);
            break;
        case 'number':
            setNumber(value);
            break;
        default:
            break;
    }
};
    
// const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   }

//   const newContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const delContact = contactId => {
//     newContacts(contacts.filter(contact => contact.id !== contactId),
//     setFilter(''),
//     );
//   };

//   const addName = ({ name, number }) => {
    
    
const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

      if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${contact.name} is already in contacts`);
      }

      if (contacts.some(contact => contact.number === number)) {
        return alert(`${contact.number} is already in contacts`);
      }

    dispatch(actions.addContact(contact));
    resetForm();
  };
//       return;
//     }
//     addName();
//     setName('');
//     setNumber('');
//   };
    
const resetForm = () => {
    setName('');
    setNumber('');
    }
    
    return (

    <form className={css.form} onSubmit={handleSubmit}>
            
        <label className={css.form__label}>
        Name
        <input
            className={css.form__input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
            
        <br />
            
        <label className={css.form__label}>
        Number
        <input
            className={css.form__input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
            </label>
            
        <button className={css.form__btn} type="submit">Add contact</button>
            
    </form>
    )}


export default ContactForm;
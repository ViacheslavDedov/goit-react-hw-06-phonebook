import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('add/contact');
const delContact = createAction('delete/contact');
const chahgeFilter = createAction('change/filter');

export const actions = { addContact, delContact, chahgeFilter };
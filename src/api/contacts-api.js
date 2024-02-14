import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c651b2e5b94dfca2e15c78.mockapi.io/phonebook/contacts',
});

export async function requestFetchContacts() {
  return await contactsInstance.get('/').then(resp => resp.data);
}

export async function requestAddContact(body) {
  return await contactsInstance.post('/', body).then(resp => resp.data);
}

export async function requestDeleteContact(id) {
  return await contactsInstance.delete(`/${id}`).then(resp=>resp.data)
}
import authInstance from './auth-api';

export async function requestFetchContacts() {
  const resp = await authInstance.get('/contacts')
  return resp.data;
}

export async function requestAddContact(body) {
  const resp = await authInstance.post('/contacts', body)
  return resp.data;
}

export async function requestDeleteContact(id) {
const resp = await authInstance.delete(`/contacts/${id}`)
  return resp.data; 
}


export async function requestChangeContact(id, body) {
  const resp = await authInstance.patch(`/contacts/${id}`, body);
  return resp.data;
}
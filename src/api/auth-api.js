import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.Authorization = '';
};

export async function signupRequest(body) {
  const resp = await authInstance.post('/users/signup', body);
  setToken(resp.data.token);
  return resp.data;
}

export async function loginRequest(body) {
  const resp = await authInstance.post('/users/login', body);
  setToken(resp.data.token);
  return resp.data;
}

export async function currentRequest(token) {
  setToken(token);
  try {
    const resp = await authInstance.get('/users/current');
    return resp.data;
  } catch (error) {
    setToken();
    throw error;
  }
}

export async function logoutRequest(token) {
  const resp = await authInstance.post('/users/logout');
  setToken();
  return resp.data;
}


export default authInstance;
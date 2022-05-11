import { API_URL } from '../config/constants';

export const getUser = userId => 
  fetch(`${API_URL}/users/${userId}`)
    .then(res => res.json())
    .then(data => data);
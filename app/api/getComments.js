import { API_URL } from "../config/constants";

export const getComments = postId => 
  fetch(`${API_URL}/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => data);
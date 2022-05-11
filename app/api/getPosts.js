import { API_URL } from "../config/constants";

export const getPosts = () => fetch(`${API_URL}/posts`).then(res => res.json()).then(data => data);
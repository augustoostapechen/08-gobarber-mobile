import axios from 'axios';

// efetuar adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

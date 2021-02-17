import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-5ca05-default-rtdb.firebaseio.com'
});

export default instance;
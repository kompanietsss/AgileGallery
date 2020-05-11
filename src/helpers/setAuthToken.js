import axios from '../api';
import {getToken} from './secureStorage';

const setAuthToken = async data => {
  const token = data || (await getToken('token'));

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }

  return token;
};

export default setAuthToken;

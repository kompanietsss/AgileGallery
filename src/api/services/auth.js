import {API_KEY} from 'react-native-dotenv';
import unify from '../unify';
import api from '..';

const fetchToken = () => unify(api.post('/auth', {apiKey: API_KEY}));

export default fetchToken;

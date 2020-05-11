import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';
import fetchToken from '../../api/services/auth';
import {AuthContext} from '../context';

const LoginScreen = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const tokenHandler = async () => {
    const {token} = await fetchToken();
    if (token) {
      signIn(token);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Login" type="outline" onPress={tokenHandler} />
    </View>
  );
};

export default LoginScreen;

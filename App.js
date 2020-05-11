import React, {useState, useMemo, useEffect, useCallback} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {removeToken, setToken} from './src/helpers/secureStorage';
import {AuthContext} from './src/screens/context';
import {RootStackScreen} from './src/stacks';
import {StatusBar} from 'react-native';
import setAuthToken from './src/helpers/setAuthToken';
import {DARKBLUE} from './src/helpers/colors';

export default () => {
  const [isToken, setIsToken] = useState(false);

  const getToken = useCallback(async () => {
    const token = await setAuthToken();
    if (token) {
      setIsToken(true);
    }
  }, []);

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authContext = useMemo(() => {
    return {
      signIn: token => {
        setToken('token', token);
        setAuthToken(token);
        setIsToken(true);
      },
      signOut: () => {
        removeToken('token');
        setIsToken(false);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar backgroundColor={DARKBLUE} />
      <NavigationContainer>
        <RootStackScreen userToken={isToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import GalleryScreen from '../screens/GalleryScreen';
import {Text} from 'react-native';
import {AuthContext} from '../screens/context';
import {BLUE} from '../helpers/colors';
import styles from './styles';
import DetailsScreen from '../screens/DetailsScreen';

const GalleryStack = createStackNavigator();
const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{
        headerShown: false,
      }}
      name="LoginScreen"
      component={LoginScreen}
    />
  </AuthStack.Navigator>
);

export const GalleryStackScreen = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        options={{
          title: null,
          headerStyle: {
            backgroundColor: BLUE,
            shadowColor: 'transparent',
          },
          headerLeft: () => <Text style={styles.textLeft}>Gallery app</Text>,
          headerRight: () => (
            <Text style={styles.textRight} onPress={() => signOut('token')}>
              Sign out
            </Text>
          ),
        }}
        name="GalleryScreen"
        component={GalleryScreen}
      />
      <GalleryStack.Screen
        options={({navigation}) => ({
          title: null,
          headerStyle: {
            backgroundColor: '#000',
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <Text onPress={() => navigation.pop()} style={styles.textLeft}>
              Back
            </Text>
          ),
        })}
        name="DetailsScreen"
        component={DetailsScreen}
      />
    </GalleryStack.Navigator>
  );
};

export const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={GalleryStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

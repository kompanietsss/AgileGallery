import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LIGHTBLUE} from '../helpers/colors';
import styles from './styles/loader';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={LIGHTBLUE} size="large" />
    </View>
  );
};

export default Loader;

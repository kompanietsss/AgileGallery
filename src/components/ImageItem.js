import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles/imageItem';
import FastImage from 'react-native-fast-image';

const ImageItem = ({item, imageDetailsHandler}) => (
  <View style={styles.container}>
    <TouchableOpacity
      key={item.id}
      activeOpacity={0.9}
      onPress={imageDetailsHandler}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.cropped_picture,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  </View>
);

export default ImageItem;

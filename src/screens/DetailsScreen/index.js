import React, {useEffect, useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {getImageDetails} from '../../api/services/gallery';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-elements';
import {w, h} from '../../helpers/misc';
import ImageZoom from 'react-native-image-pan-zoom';
import Share from 'react-native-share';

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const insets = useSafeArea();
  const [imageDetails, setImageDetails] = useState(null);

  const getImageDetailsHandler = useCallback(async () => {
    const data = await getImageDetails(id);
    if (data.id) {
      setImageDetails(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getImageDetailsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareSingleImage = async () => {
    const shareOptions = {
      title: 'Share file',
      url: imageDetails.full_picture,
      failOnCancel: false,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      return error;
    }
  };

  return (
    imageDetails && (
      <View style={{...styles.container, paddingBottom: insets.bottom}}>
        <ImageZoom
          cropWidth={w}
          cropHeight={h}
          imageWidth={(90 * w) / 100}
          imageHeight={(65 * w) / 100}>
          <FastImage
            style={styles.image}
            source={{
              uri: imageDetails.full_picture,
            }}
          />
        </ImageZoom>

        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{imageDetails.author}</Text>
            <Text style={styles.text}>{imageDetails.camera}</Text>
          </View>
          <Button
            title="Share"
            type="outline"
            containerStyle={styles.buttonStyle}
            onPress={shareSingleImage}
          />
        </View>
      </View>
    )
  );
};

export default DetailsScreen;

import React, {useEffect, useCallback, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import styles from './styles';
import {getImages} from '../../api/services/gallery';
import ImageItem from '../../components/ImageItem';

const GalleryScreen = ({navigation}) => {
  const insets = useSafeArea();
  const [imagePage, setImagePage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [images, setImages] = useState([]);

  const getImagesHandler = useCallback(async () => {
    const {pictures, pageCount} = await getImages(imagePage);

    if (pageCount > 0) {
      setMaxPage(pageCount);
      setImages([...images, ...pictures]);
    }
  }, [imagePage, images]);

  useEffect(() => {
    getImagesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagePage]);

  const fetchNextPageHandler = () => {
    if (imagePage < maxPage) {
      setImagePage(imagePage + 1);
    }
  };

  const imageDetailsHandler = id => navigation.navigate('DetailsScreen', {id});

  return (
    <View style={{...styles.container, paddingBottom: insets.bottom}}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <ImageItem
            item={item}
            imageDetailsHandler={() => imageDetailsHandler(item.id)}
          />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={() => fetchNextPageHandler()}
      />
    </View>
  );
};

export default GalleryScreen;

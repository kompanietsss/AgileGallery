import {StyleSheet} from 'react-native';
import {w} from '../../helpers/misc';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: w / 100,
  },
  image: {
    height: (48 * w) / 100,
    width: (48 * w) / 100,
  },
});

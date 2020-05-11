import {StyleSheet} from 'react-native';
import {h, w} from '../../helpers/misc';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {color: '#fff', fontSize: (3.5 * w) / 100, fontWeight: '600'},
  textContainer: {
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    bottom: (10 * h) / 100,
    marginTop: (4 * h) / 100,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: (30 * w) / 100,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  pictureLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 50,
    height: 50,
  },
  pictureRight: {
    position: 'absolute',
    right: 23,
    top: 16,
    width: 32,
    height: 32,
  },
  container: {
    height: 50,
    width: '100%',
  },
});

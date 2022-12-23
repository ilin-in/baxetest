import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.iron,
  },
  linearGradient: {
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 2,
  },
});

export const cardGradient = [colors.white, colors.gallery];

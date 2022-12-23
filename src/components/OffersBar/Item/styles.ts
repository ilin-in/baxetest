import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/theme';

export default StyleSheet.create({
  container: {
    width: 218,
    height: 97,
    backgroundColor: colors.athensGray,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15,
    marginLeft: 15,
  },
  textArea: {
    width: 102,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    color: colors.manatee,
  },
  close: {
    height: 16,
    width: 16,
  },
});

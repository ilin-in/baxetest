import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';

export const cardGradient = [colors.zircon, colors.botticelli];

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.athensGray,
  },
  qr: {
    position: 'absolute',
    top: 16,
    right: 17,
  },
  balance: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 29,
    marginTop: 38,
  },
  balanceView: {
    marginLeft: 29,
    marginTop: 15,
    flexDirection: 'row',
  },
  balanceValue: {
    fontWeight: 'bold',
    fontSize: 38,
    marginTop: -6,
    marginLeft: 7,
  },
  euro: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 29,
    marginTop: 4,
  },
  bottomBar: {
    height: 65,
    backgroundColor: colors.heather,
    opacity: 0.5,
    margin: 2,
    marginTop: 23,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

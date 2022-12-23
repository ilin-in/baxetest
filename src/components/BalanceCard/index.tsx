import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, {cardGradient} from './styles';
import QRIcon from '../../assets/icons/qr.svg';
import LogoIcon from '../../assets/icons/balance/logo.svg';
import GradientText from '../GradientText';

export default () => (
  <View style={styles.container}>
    <LinearGradient colors={cardGradient} style={styles.linearGradient} />
    <QRIcon style={styles.qr} />
    <GradientText style={styles.balance}>Balance</GradientText>
    <View style={styles.balanceView}>
      <LogoIcon />
      <GradientText style={styles.balanceValue}>5.621</GradientText>
    </View>
    <GradientText style={styles.euro}>€ 0.00</GradientText>
    <View style={styles.bottomBar} />
  </View>
);

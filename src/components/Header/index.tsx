import React from 'react';
import {Image, View} from 'react-native';
import {Picture1} from '../../assets/pictures';
import styles from './styles';
import MaskIcon from '../../assets/icons/mask.svg';
export default () => (
  <View style={styles.container}>
    <Image source={Picture1} style={styles.pictureLeft} resizeMode={'cover'} />
    <MaskIcon style={styles.pictureRight} />
  </View>
);

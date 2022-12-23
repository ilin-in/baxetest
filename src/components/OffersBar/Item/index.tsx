import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CloseIcon from '../../../assets/icons/close.svg';

export type ButtonProps = {
  title: string;
  text: string;
  Icon?: any;
};

export default ({title, text, Icon}: ButtonProps) => (
  <View style={styles.container}>
    {Icon}
    <View style={styles.textArea}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
    <CloseIcon style={styles.close} />
  </View>
);

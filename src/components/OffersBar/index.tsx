import React from 'react';
import {ScrollView} from 'react-native';
import Item from './Item';
import styles from './styles';
import FinanceIcon from '../../assets/icons/finance.svg';
import ItemIcon from '../../assets/icons/item.svg';

export default () => (
  <ScrollView
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
    horizontal>
    <Item
      title={'Pay Offline With BAXE Card'}
      text={'Easy Pay & Free Fee'}
      Icon={<ItemIcon />}
    />
    <Item
      title={'One More Step to Higher Account Level'}
      text={'Easy Pay & Free Fee'}
      Icon={<FinanceIcon />}
    />
  </ScrollView>
);

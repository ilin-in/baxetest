import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BalanceCard, Header, OffersBar} from '../../components';
import styles, {cardGradient} from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <LinearGradient colors={cardGradient} style={styles.linearGradient}>
        <Text style={styles.title}>Hi there</Text>
        <Text style={styles.subtitle}>
          Fund your account to start investing.
        </Text>
        <OffersBar />
        <BalanceCard />
      </LinearGradient>
    </View>
  );
};

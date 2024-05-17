// screens/OurCultureScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OurCultureScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Our Culture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OurCultureScreen;

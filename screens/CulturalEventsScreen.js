// screens/CulturalEventsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CulturalEventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cultural Events</Text>
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

export default CulturalEventsScreen;

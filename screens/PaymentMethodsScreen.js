// screens/PaymentMethodsScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PaymentMethodsScreen = () => {
  const route = useRoute();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment for {event.title}</Text>
      <TextInput placeholder="Card Number" style={styles.input} />
      <TextInput placeholder="MM / YYYY" style={styles.input} />
      <TextInput placeholder="CVV" style={styles.input} />
      <Button title="Pay Now" onPress={() => { /* Handle payment */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default PaymentMethodsScreen;

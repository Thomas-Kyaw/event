// screens/CheckoutScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.price}>Price: $200</Text>
      <Button title="Proceed to Payment" onPress={() => navigation.navigate('PaymentMethods', { event })} />
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
  price: {
    fontSize: 20,
    color: '#000',
  },
});

export default CheckoutScreen;

// screens/PaymentMethodsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PaymentMethodsScreen = () => {
  const route = useRoute();
  const { event } = route.params;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const renderCardDetails = () => {
    if (selectedPaymentMethod === 'credit/debit') {
      return (
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>Card Info</Text>
          <TextInput placeholder="Enter name shown on the card" style={styles.input} />
          <TextInput placeholder="Enter card number" style={styles.input} />
          <View style={styles.cardExpiryContainer}>
            <TextInput placeholder="MM / YYYY" style={[styles.input, styles.cardExpiryInput]} />
            <TextInput placeholder="CVV" style={[styles.input, styles.cvvInput]} />
            <Ionicons name="help-circle-outline" size={20} color="black" />
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setSelectedPaymentMethod('credit/debit')}
      >
        <Ionicons
          name={selectedPaymentMethod === 'credit/debit' ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color="black"
        />
        <Text style={styles.paymentMethodText}>Credit/Debit</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      {renderCardDetails()}
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setSelectedPaymentMethod('e-wallet')}
      >
        <Ionicons
          name={selectedPaymentMethod === 'e-wallet' ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color="black"
        />
        <Text style={styles.paymentMethodText}>E-Wallet</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setSelectedPaymentMethod('paypal')}
      >
        <Ionicons
          name={selectedPaymentMethod === 'paypal' ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color="black"
        />
        <Text style={styles.paymentMethodText}>PayPal</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.payNowButton}>
        <Text style={styles.payNowButtonText}>Pay Now</Text>
      </TouchableOpacity>
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
    marginBottom: 24,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentMethodText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  cardInfo: {
    marginBottom: 24,
  },
  cardInfoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  cardExpiryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardExpiryInput: {
    width: 100,
    marginRight: 8,
  },
  cvvInput: {
    width: 60,
    marginRight: 8,
  },
  payNowButton: {
    backgroundColor: '#a55eea',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  payNowButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentMethodsScreen;
// screens/CheckoutScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params;
  const [couponCode, setCouponCode] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.price}>$200</Text>
      <View style={styles.orderSummary}>
        <Text style={styles.orderTitle}>Order Summary</Text>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Order</Text>
          <Text style={styles.orderValue}>$200</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Service Tax (6%)</Text>
          <Text style={styles.orderValue}>$12</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Total</Text>
          <Text style={styles.orderValue}>$212</Text>
        </View>
      </View>
      <View style={styles.couponsSection}>
        <Text style={styles.couponsTitle}>Coupons</Text>
        <View style={styles.couponInputContainer}>
          <TextInput
            style={styles.couponInput}
            placeholder="Coupon Code"
            value={couponCode}
            onChangeText={setCouponCode}
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('PaymentMethods', { event })}
      >
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderSummary: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderLabel: {
    fontSize: 16,
  },
  orderValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 8,
  },
  couponsSection: {
    marginBottom: 16,
  },
  couponsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  couponInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#a55eea',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#a55eea',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;